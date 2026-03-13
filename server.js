const bossInput = document.getElementById('bossInput');
const intel = document.getElementById('intel');
const vuln = document.getElementById('vuln');
const term = document.getElementById('term');
const logs = document.getElementById('logs');

bossInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        const cmd = bossInput.value;
        bossInput.value = '';

        // Boxes ko 'Scanning' mode mein daalna
        intel.innerHTML = "> [PROCESS] SCANNING GLOBAL INTEL...";
        vuln.innerHTML = "> [PROCESS] ANALYZING VULNERABILITIES...";
        term.innerHTML = "> [PROCESS] PREPARING TERMINAL COMMANDS...";
        logs.innerHTML += `\n> Incoming Order: ${cmd}`;

        try {
            // Hamare naye server se AI response mangna
            const response = await fetch('/execute', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ command: cmd })
            });
            const data = await response.json();
            
            // AI ka jawab boxes mein fit karna
            intel.innerHTML = `> [INTEL DATA]\n${data.result.split('\n')[0] || data.result}`;
            vuln.innerHTML = `> [RESEARCH]\n${data.result.split('\n')[1] || "Analysis Complete."}`;
            term.innerHTML = `> [COMMAND]\n${data.result.substring(data.result.length / 2)}`;
            logs.innerHTML += `\n> Task Executed Successfully.`;
        } catch (err) {
            intel.innerHTML = "> ERROR: BRAIN_NOT_RESPONDING. Deploy Web Service first.";
        }
    }
});
