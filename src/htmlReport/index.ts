// prettier-ignore

import { getGitLogStatsType } from "../";
import { renderChart } from "../chartGenerator";
import { weekDayName } from "../utils";
import { readFileSync } from "fs";

export const generateHTMLReport = ({
  firstCommit,
  lastCommit,
  totalCommits,
  authors,
  commitsByAuthor,
  commitsByDayHour,
  commitsByWeekDay,
}: getGitLogStatsType) => {
  const resetStyle = readFileSync(new URL("../vendor/reset.css", import.meta.url));
  const reportStyle = readFileSync(new URL("./styles.css", import.meta.url));

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>magit-stats - Repository Statistics</title>
    <style>
      ${resetStyle}
      ${reportStyle}
    </style>
  </head>

<body>
<div>
  <div class="container">

    <div>
      <h1>Repository Statistics</h1>
    </div>


    <table class="total-commits">
        <tr><th class="first-column">Basics</th></tr>
        <tr><td>Total Commits</td><td>${totalCommits}</td></tr>
        <tr><td>Fist Commit</td><td>${firstCommit}</td></tr>
        <tr><td>Last Commit</td><td>${lastCommit}</td></tr>
    </table>

    <table class="authors">
        <tr><th class="first-column">Authors</th></tr>
         ${authors
           .map((author) => `<tr><td>${author.name}</td><td>${author.email}</td></tr>`)
           .join("")}
    </table>

${renderChart({ data: commitsByAuthor, chartType: "COMMITS_BY_AUTHOR" })}

${renderChart({ data: commitsByDayHour, chartType: "COMMITS_BY_HOUR" })}

${renderChart({ data: commitsByWeekDay, chartType: "COMMITS_BY_WEEKDAY" })}

    <table class="commits-by-author">
        <tr><th class="first-column">Authors</th><th>Commits</th></tr>
        ${commitsByAuthor
          .map(
            (committer) =>
              `<tr><td>${committer.name}</td><td>${
                committer.authorCommits
              }</td><td>${committer.authorCommitsShare.toFixed(2)}%</td></tr>`,
          )
          .join("")}
    </table>

    <table class="commits-by-day-hour">
    <tr><th class="first-column">Hour</th><th>Commits</th></tr>
    ${(commitsByDayHour as any)
      .map((entry: any) => `<tr><td>${entry.hour}</td><td>${entry.commits}</td></tr>`)
      .join("")}
    </table>

    <table class="commits-by-week-day">
    <tr><th class="first-column">WeekDay</th><th>Commits</th></tr>
    ${(commitsByWeekDay as any)
      .map(
        (entry: any) => `<tr><td>${weekDayName(entry.weekDay)}</td><td>${entry.commits}</td></tr>`,
      )
      .join("")}

    </table>

    <div class="footer">
      <p>Report generated at: ${new Date()}
      by <a href="https://github.com/LionyxML/magit-stats" target="_blank">[magit-stats]</a></p>
    </div>

  </div>
</div>
</body>
</html>
`;
};
