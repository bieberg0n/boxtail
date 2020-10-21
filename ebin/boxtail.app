{application, 'boxtail', [
	{description, "New project"},
	{vsn, "0.1.0"},
	{modules, ['boxtail_app','boxtail_sup','erws_handler','hello_handler']},
	{registered, [boxtail_sup]},
	{applications, [kernel,stdlib,cowboy]},
	{mod, {boxtail_app, []}},
	{env, []}
]}.