package com.hardpaper.paperbotserver.bot.system;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.reflections.Reflections;

import com.hardpaper.paperbotserver.bot.command.PaperBotSlashCommand;

import net.dv8tion.jda.api.entities.Guild;
import net.dv8tion.jda.api.events.guild.GuildJoinEvent;
import net.dv8tion.jda.api.events.guild.GuildReadyEvent;
import net.dv8tion.jda.api.events.interaction.SlashCommandEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.interactions.commands.build.CommandData;

public class PaperBotSlashCommandHandler extends ListenerAdapter
{
	private Map<String, PaperBotSlashCommand> commandCallbacks = new HashMap<String, PaperBotSlashCommand>();
	private ArrayList<CommandData> builtCommands = new ArrayList<CommandData>();
	
	public PaperBotSlashCommandHandler() {
		Set<Class<? extends PaperBotSlashCommand>> list
		= new Reflections("com.hardpaper.paperbotserver.bot.command").getSubTypesOf(PaperBotSlashCommand.class);
		
		for (Class<? extends PaperBotSlashCommand> slashCommand : list) {
			try {
				PaperBotSlashCommand command = slashCommand.getDeclaredConstructor().newInstance();
				
				CommandData builtCommand = command.GetCommandBuild();
				
				builtCommands.add(builtCommand);
				
				commandCallbacks.put(builtCommand.getName(), command);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	public void BuildCommands(Guild guild) {
		guild.updateCommands().addCommands(builtCommands).queue();
	}
	
	@Override
	public void onGuildReady(GuildReadyEvent event) {
		this.BuildCommands(event.getGuild());
	}
	
	@Override
	public void onGuildJoin(GuildJoinEvent event) {
		this.BuildCommands(event.getGuild());
	}
	
	@Override
	public void onSlashCommand(SlashCommandEvent event) {
		String commandName = event.getName();
		
		event.deferReply().queue();
		
		if(commandCallbacks.containsKey(commandName)) {
			commandCallbacks.get(commandName).ExcuteCommand(event);
		}
	}
}
