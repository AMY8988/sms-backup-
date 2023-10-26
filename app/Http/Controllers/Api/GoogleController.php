<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class GoogleController extends Controller
{
    /**
     * Gets a google client
     *
     * @return \Google_Client
     * INCOMPLETE
     */
    private function getClient()
    {
        // load our config.json that contains our credentials for accessing google's api as a json string
        $configJson = base_path() . '/google-oauth-credentials.json';
        // dd($configJson);
        // define an application name
        $applicationName = 'school-management-system';

        // create the client
        $client = new \Google_Client();
        $client->setApplicationName($applicationName);
        $client->setAuthConfig($configJson);
        

        $client->setAccessType('offline'); // necessary for getting the refresh token
        $client->setApprovalPrompt('force'); // necessary for getting the refresh token
        // scopes determine what google endpoints we can access. keep it simple for now.
        $client->setScopes(
            [
                \Google\Service\Oauth2::USERINFO_PROFILE,
                \Google\Service\Oauth2::USERINFO_EMAIL,
                \Google\Service\Oauth2::OPENID,
                \Google\Service\Drive::DRIVE_METADATA_READONLY, // allows reading of google drive metadata
            ]
        );
        $client->setIncludeGrantedScopes(true);
        // dd($client);
        // return response()->json($client);
        return $client;
    } // getClient

    /**
     * Return the url of the google auth.
     * FE should call this and then direct to this url.
     *
     * @return JsonResponse
     * INCOMPLETE
     */
    public function getAuthUrl(Request $request)
    {
        /**
         * Create google client
         */
        $client = $this->getClient();

        /**
         * Generate the url at google we redirect to
         */
        $authUrl = $client->createAuthUrl();

        /**
         * HTTP 200
         */
        return response()->json(["authUrl" => $authUrl], 200);
    } // getAuthUrl

    /**
     * Login and register
     * Gets registration data by calling google Oauth2 service
     *
     * @return JsonResponse
     */
    public function postLogin(Request $request)
    {

        /**
         * Get authcode from the query string
         * Url decode if necessary
         */
        $authCode = urldecode($request->input('auth_code'));

        /**
         * Google client
         */
        $client = $this->getClient();

        /**
         * Exchange auth code for access token
         * Note: if we set 'access type' to 'force' and our access is 'offline', we get a refresh token. we want that.
         */
        $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);

        /**
         * Set the access token with google. nb json
         */
        $client->setAccessToken(json_encode($accessToken));

        /**
         * Get user's data from google
         */
        $service = new \Google\Service\Oauth2($client);
        $userFromGoogle = $service->userinfo->get();

        /**
         * Select user if already exists
         */
        $user = User::where('provider_name', '=', 'google')
            ->where('provider_id', '=', $userFromGoogle->id)
            ->first();

        /**
         */
        if (!$user) {
            $user = User::create([
                'provider_id' => $userFromGoogle->id,
                'provider_name' => 'google',
                'google_access_token_json' => json_encode($accessToken),
                'name' => $userFromGoogle->name,
                'email' => $userFromGoogle->email,
                //'avatar' => $providerUser->picture, // in case you have an avatar and want to use google's
            ]);
        }
        /**
         * Save new access token for existing user
         */
        else {
            $user->google_access_token_json = json_encode($accessToken);
            $user->save();
        }

        /**
         * Log in and return token
         * HTTP 201
         */
        $token = $user->createToken("school")->accessToken;

        return response()->json([
            "accessToken" => $token,
            "google" => $token,
        ], 201);
    } // postLogin

    public function authUser()
    {
        return response()->json(auth('api')->user());
    }
}
