%%%-------------------------------------------------------------------
%%% @author bj
%%% @copyright (C) 2020, <COMPANY>
%%% @doc
%%%
%%% @end
%%% Created : 31. 10月 2020 上午12:15
%%%-------------------------------------------------------------------
-module(players).
-author("bj").

-include_lib("players.hrl").
-import(utils, [log/1, log/2, json_encode/1]).

%% API
-export([
	players_do/1,
	broadcast/1
]).

-define(SPEED, 5).

-spec player_do_status(player(), atom()) -> player().
player_do_status(P, right) ->
	#{x := X} = P,
	P#{x := X + ?SPEED, direction := right};
player_do_status(P, left) ->
	#{x := X} = P,
	P#{x := X - ?SPEED, direction := left};
player_do_status(P, up) ->
	#{y := Y} = P,
	P#{y := Y - ?SPEED, direction := up};
player_do_status(P, down) ->
	#{y := Y} = P,
	P#{y := Y + ?SPEED, direction := down};
player_do_status(P, undefined) ->
	P;
player_do_status(P, Status) ->
	log("player unknown status: ~p~n", [Status]),
	P.

-spec player_do(player(), [atom()]) -> player().
player_do(P, []) ->
	P;
player_do(P, [H|T]) ->
	NewP = player_do_status(P, H),
	player_do(NewP, T).

-spec player_do(player()) -> player().
player_do(P) ->
	#{status := Status} = P,
	player_do(P, Status).

-spec players_do(players(), [pid()], players()) -> players().
players_do(_Players, [], NewPlayers) ->
	NewPlayers;
players_do(Players, [Pid|Pids], NewPlayers) ->
	#{Pid := Player} = Players,
	NewPlayer = player_do(Player),
	players_do(Players, Pids, NewPlayers#{Pid => NewPlayer}).

-spec players_do(players()) -> players().
players_do(Players) ->
	players_do(Players, maps:keys(Players), maps:new()).

-spec broadcast(players()) -> ok.
broadcast(Players) ->
	Pids = maps:keys(Players),
	PlayersData = maps:values(Players),
	lists:map(fun(Pid) -> Pid ! {text, json_encode(PlayersData)} end, Pids),
	ok.