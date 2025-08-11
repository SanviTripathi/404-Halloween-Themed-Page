function updateClocks() {
    const now = new Date();
    document.querySelector("#india-time .time").textContent = now.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });
    document.querySelector("#ny-time .time").textContent = now.toLocaleTimeString("en-US", { timeZone: "America/New_York" });
    document.querySelector("#london-time .time").textContent = now.toLocaleTimeString("en-GB", { timeZone: "Europe/London" });
    document.querySelector("#tokyo-time .time").textContent = now.toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo" });
    document.querySelector("#sydney-time .time").textContent = now.toLocaleTimeString("en-AU", { timeZone: "Australia/Sydney" });
    document.querySelector("#dubai-time .time").textContent = now.toLocaleTimeString("en-AE", { timeZone: "Asia/Dubai" });
}
setInterval(updateClocks, 1000);
updateClocks();

const countries = Intl.supportedValuesOf("timeZone");
const select = document.getElementById("country-select");
countries.forEach(tz => {
    let option = document.createElement("option");
    option.value = tz;
    option.textContent = tz.replace("_", " ");
    select.appendChild(option);
});

select.addEventListener("change", () => {
    const tz = select.value;
    const now = new Date();
    document.getElementById("selected-time").textContent = `Current time in ${tz}: ${now.toLocaleTimeString([], { timeZone: tz })}`;
});

// Notes
document.getElementById("notes-area").addEventListener("input", function() {
    localStorage.setItem("notes", this.value);
});
document.getElementById("notes-area").value = localStorage.getItem("notes") || "";

// Stopwatch
let timer, seconds = 0;
function startStopwatch() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            document.getElementById("display").textContent = new Date(seconds * 1000).toISOString().substr(11, 8);
        }, 1000);
    }
}
function stopStopwatch() {
    clearInterval(timer);
    timer = null;
}
function resetStopwatch() {
    stopStopwatch();
    seconds = 0;
    document.getElementById("display").textContent = "00:00:00";
}

// Tabs
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) tablinks[i].classList.remove("active");
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}
