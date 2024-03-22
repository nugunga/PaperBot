package com.hardpaper.paperbotserver.bot.command;

import net.dv8tion.jda.api.events.interaction.SlashCommandEvent;
import net.dv8tion.jda.api.interactions.commands.build.CommandData;

public interface PaperBotSlashCommand {
	public CommandData GetCommandBuild();
	
	public void ExcuteCommand(SlashCommandEvent event);
}
