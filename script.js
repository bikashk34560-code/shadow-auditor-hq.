document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let cmd = this.value.toLowerCase();
        let strat = document.querySelector('.box:nth-child(2) p');
        let intel = document.querySelector('.box:nth-child(3) p');
        let agent = document.querySelector('.box:nth-child(4) p');
        
        this.value = ''; // Input box khali karne ke liye

        // COMMAND LOGIC
        if (cmd.includes('hello') || cmd.includes('kaise ho')) {
            strat.innerHTML = "Deepshikha: Hello Boss! System active hai. Aapka agla order kya hai?";
            intel.innerHTML = "Intel Scout: Status check... [OK]";
            agent.innerHTML = "Field Agent: Kali Cloud linked and waiting.";
        } 
        else if (cmd.includes('status') || cmd.includes('report')) {
            strat.innerHTML = "Deepshikha: Sab theek chal raha hai. Jala Amrit data secure hai.";
            intel.innerHTML = "Intel Scout: Scanning local networks... No threats found.";
            agent.innerHTML = "Field Agent: All scripts are running in background.";
        } 
        else if (cmd.includes('jala amrit')) {
            strat.innerHTML = "Deepshikha: Business strategy updated. Kokilaksha inventory clear.";
            intel.innerHTML = "Intel Scout: Market analysis loading...";
        } 
        else {
            strat.innerHTML = "Deepshikha: Order mil gaya Boss. '" + cmd + "' par kaam shuru hai.";
        }
    }
});
