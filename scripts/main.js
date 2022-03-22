let scripts = Vars.dataDirectory.child("scripts/").list(".js");


Events.on(ContentInitEvent, e => {
    if(scripts.length > 0){
        Time.mark()
        Log.infoTag("Startup", "Found " + scripts.length + " startup scripts")

        for(let script of scripts){
            Time.mark();
            Vars.mods.getScripts().runConsole(script.readString());
            Log.infoTag("Startup", script.name() + ", " + Mathf.floor(Time.elapsed()) + "ms");
        }

        Log.infoTag("Startup", "Finished loading scripts, took " + Mathf.floor(Time.elapsed()) + "ms");
    }else{
        Log.infoTag("Startup", "No startup scripts to load");
    }
})
