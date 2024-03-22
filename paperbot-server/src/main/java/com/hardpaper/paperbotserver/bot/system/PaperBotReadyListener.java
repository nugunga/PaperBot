package com.hardpaper.paperbotserver.bot.system;

import net.dv8tion.jda.api.events.GenericEvent;
import net.dv8tion.jda.api.events.ReadyEvent;
import net.dv8tion.jda.api.hooks.EventListener;

public class PaperBotReadyListener implements EventListener {
	@Override
    public void onEvent(GenericEvent event) {
        if (event instanceof ReadyEvent) {
            System.out.println("Papet Bot ready!");
        }
    }
}
