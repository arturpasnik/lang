<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Auth;
use Validator;
use JWTFactory;
use JWTAuth;

class APILoginController extends Controller
{
	use AuthenticatesUsers;

	public function login(Request $request)
	{
		$this->validateLogin($request);
		if ($this->hasTooManyLoginAttempts($request)) {
			$this->fireLockoutEvent($request);
			return $this->sendLockoutResponse($request);
		}
		$credentials = $request->only('email', 'password');
		$this->incrementLoginAttempts($request);
		try {
			if (!$token = JWTAuth::attempt($credentials)) {
				return $this->sendFailedLoginResponse($request);
			}
		} catch (JWTException $e) {
			return $this->sendFailedLoginResponse($request);
		}
		return response()->json(compact(['token']));
	}

	public function logout()
	{
		JWTAuth::invalidate();
		return response([
			'status' => 'success',
			'msg' => 'Logged out Successfully.'], 200);
	}
}