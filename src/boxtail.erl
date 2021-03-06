%%%-------------------------------------------------------------------
%%% @author bj
%%% @copyright (C) 2020, <COMPANY>
%%% @doc
%%%
%%% @end
%%% Created : 25. 10月 2020 上午2:58
%%%-------------------------------------------------------------------
-module(boxtail).
-author("bj").

%% API
-export([start/0]).

start() ->
	ok = application:start(crypto),
	ok = application:start(asn1),
	ok = application:start(public_key),
	ok = application:start(ssl),
	ok = application:start(ranch),
	ok = application:start(cowlib),
	ok = application:start(cowboy),
	ok = application:start(boxtail).
