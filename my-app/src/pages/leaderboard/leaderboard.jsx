import "./leaderboard.css"




export default function Leaderboard() {
    return (
            <div id="html">
                <div id="body">
                    <div class="screen">
                        <div class="title">
                            <div class="row">
                                <div class="letter letter-d four-wide">
                                </div>
                                <div class="letter letter-o three-wide">
                                </div>
                            </div>
                        </div>
                        <div>
                            <table>
                                <div id="hof-box">
                                    <h1 class="hof">Leaderboard</h1>
                                </div>
                                <tr id = "ranker">
                                    <th>Rank</th>
                                    <th>SCORE</th>
                                    <th>NAME</th>
                                </tr>
                                <tr class="zoom">
                                    <td>★1st</td>
                                    <td>1000</td>
                                    <td>Evan★</td>
                                </tr>
                                <tr class="scores">
                                    <td>2nd</td>
                                    <td>500</td>
                                    <td>Evan</td>
                                </tr>
                                <tr class="scores">
                                    <td>3rd</td>
                                    <td>200</td>
                                    <td>Evan</td>
                                </tr>
                                <tr>
                                    <td>4th</td>
                                    <td>300</td>
                                    <td>Christopher</td>
                                </tr>
                                <tr>
                                    <td>5th</td>
                                    <td>-500</td>
                                    <td>Emmanuel</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    )
}
