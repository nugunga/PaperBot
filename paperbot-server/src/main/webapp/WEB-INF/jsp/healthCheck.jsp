<%@page import="com.hardpaper.paperbotserver.PaperbotServerApplication"%>
<%@ page language="java" contentType="application/json; charset=utf-8"%>
<%
	out.clear();
	out.print("{ result : " + PaperbotServerApplication.paperBot.HealthCheck() + " }");
%>