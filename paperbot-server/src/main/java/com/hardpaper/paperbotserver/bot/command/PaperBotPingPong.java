package com.hardpaper.paperbotserver.bot.command;

import net.dv8tion.jda.api.events.interaction.SlashCommandEvent;
import net.dv8tion.jda.api.interactions.commands.build.CommandData;

public class PaperBotPingPong implements PaperBotSlashCommand {
	@Override
	public CommandData GetCommandBuild() {
		return new CommandData("ping", "Calculate ping of the bot");
	}

	@Override
	public void ExcuteCommand(SlashCommandEvent event) {
		event.getHook().sendMessage("pong!").queue();
	}

}
