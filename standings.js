// API endpoint for NBA teams
const apiUrl = "https://www.balldontlie.io/api/v1/teams";

// Function to fetch team data and populate standings
async function fetchAndDisplayStandings() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Sort teams alphabetically (since this API does not provide rankings directly)
        const sortedTeams = data.data.sort((a, b) => a.full_name.localeCompare(b.full_name));

        // Populate the Eastern and Western Conferences
        const eastTable = document.getElementById("east-standings");
        const westTable = document.getElementById("west-standings");

        sortedTeams.forEach((team) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${team.id}</td> <!-- Example: Replace with rank if API provides -->
                <td>${team.full_name}</td>
                <td>${team.abbreviation}</td>
                <td>${team.city}</td>
                <td>${team.division}</td>
            `;

            // Add team to the appropriate conference
            if (team.conference === "East") {
                eastTable.appendChild(row);
            } else if (team.conference === "West") {
                westTable.appendChild(row);
            }
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Run the function to fetch and populate data
document.addEventListener("DOMContentLoaded", fetchAndDisplayStandings);
