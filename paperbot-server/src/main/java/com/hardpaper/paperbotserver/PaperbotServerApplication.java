package com.hardpaper.paperbotserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.hardpaper.paperbotserver.bot.system.PaperBotMain;

@SpringBootApplication
public class PaperbotServerApplication {
	public static PaperBotMain paperBot;
	
	public static void main(String[] args) {
		paperBot = new PaperBotMain();
	    
		paperBot.StartBot(args[0]);
		
	    SpringApplication.run(PaperbotServerApplication.class, args);
	}
}
