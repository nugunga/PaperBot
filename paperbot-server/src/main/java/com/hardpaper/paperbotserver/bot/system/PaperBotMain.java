package com.hardpaper.paperbotserver.bot.system;

import java.util.Collections;

import javax.security.auth.login.LoginException;

import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.requests.GatewayIntent;
import net.dv8tion.jda.api.utils.cache.CacheFlag;

public class PaperBotMain {
	public JDA api = null;
	
	public void StartBot(String token){
		try {
			api = Login(token);
		} catch (LoginException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return;
		}
	    
	    try {
			api.awaitReady();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return;
		}
	}
	
	public boolean HealthCheck() {
		return true;
	}
	
	private JDA Login(String token) throws LoginException {
		JDABuilder builder = JDABuilder.createLight(token, Collections.emptyList());
		
		builder.enableIntents(
				GatewayIntent.GUILD_MESSAGES,
				GatewayIntent.GUILD_MESSAGE_TYPING, 
				GatewayIntent.GUILD_MESSAGE_REACTIONS);
		
	    // Disable parts of the cache
	    builder.disableCache(CacheFlag.MEMBER_OVERRIDES, CacheFlag.VOICE_STATE);
	    
	    // Enable the bulk delete event
	    builder.setBulkDeleteSplittingEnabled(false);
	    
	    // Set activity (like "playing Something")
	    builder.setActivity(Activity.playing("게임"));
	    
	    builder.addEventListeners(
	    		new PaperBotReadyListener(),
	    		new PaperBotMessageListener(),
	    		new PaperBotSlashCommandHandler()
	    		);
	    
	    return builder.build();
	}
}
