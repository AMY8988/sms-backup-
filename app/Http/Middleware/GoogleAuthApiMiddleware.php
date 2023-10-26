<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class GoogleAuthApiMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->header('Authorization');

        $configJson = base_path() . '/google-oauth-credentials.json';
        $applicationName = 'school-management-system';
        $client = new \Google_Client();
        $client->setApplicationName($applicationName);
        $client->setAuthConfig($configJson);

        if($client->verifyIdToken($token)){
            return $next($request);
        };

        return response()->json({
            message: "Unauthorized";
        }, 403);

    };
};
// LogicException: id_token must be passed in or set as part of setAccessToken in file /Applications/XAMPP/xamppfiles/htdocs/otechnique/school/school-back/vendor/google/apiclient/src/Client.php on line 811