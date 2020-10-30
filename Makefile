PROJECT = boxtail
PROJECT_DESCRIPTION = New project
PROJECT_VERSION = 0.1.0

DEPS = cowboy
dep_cowboy_commit = 2.8.0

DEP_PLUGINS = cowboy

include erlang.mk

dev:
	nodemon --watch "src/" -e erl --exec "rebar3 dialyzer && echo \"boxtail start\" && erl -pa `rebar3 path` -noshell -s boxtail start"
