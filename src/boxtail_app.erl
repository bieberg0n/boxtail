-module(boxtail_app).
-behaviour(application).

-export([start/2]).
-export([stop/1]).

start(_Type, _Args) ->
	state:start(),

	Dispatch = cowboy_router:compile([
		{'_', [
			{"/", cowboy_static, {priv_file, boxtail, "dist/game.html"}},
			{"/[...]", cowboy_static, {priv_dir, boxtail, "dist"}},
			{"/websocket", erws_handler, []}
		]}
	]),
	{ok, _} = cowboy:start_clear(http,
		[{port, 8080}],
		#{env => #{dispatch => Dispatch}}
	),
	boxtail_sup:start_link().

stop(_State) ->
	ok.
