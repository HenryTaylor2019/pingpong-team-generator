import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

class TournamentPage extends Component {
    static contextType = PlayerContext;

    render() {
        const { team, handleShuffle, players, handleReset, noOfPlayers,roundOneWinners } = this.context;

        let shuffle = (array) => {
            var ctr = array.length, temp, index;

            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr);
                ctr--;
                temp = array[ctr];
                array[ctr] = array[index];
                array[index] = temp;
            }
            return array;
        }

        let playerShuffle = shuffle(team);


        return (
            <>
                <div className="card tournament-div">
                    <div className="ui equal width grid">

                        {team.length >= 4 ?
                            <div className="column"><h4>{playerShuffle[0]}</h4> VS <h4>{playerShuffle[1]}</h4></div>
                            : null}
                        {team.length >= 4 ?
                            <div className="column"><h4>{playerShuffle[2]}</h4> VS <h4>{playerShuffle[3]}</h4></div>
                            : null}
                        {team.length >= 6 ?
                            <div className="column"><h4>{playerShuffle[4]}</h4> VS <h4>{playerShuffle[5]}</h4></div>
                            : null}
                        {team.length >= 8 ?
                            <div className="column"><h4>{playerShuffle[6]}</h4> VS <h4>{playerShuffle[7]}</h4></div>
                            : null}
                        {team.length >= 10 ?
                            <div className="column"><h4>{playerShuffle[8]}</h4> VS <h4>{playerShuffle[9]}</h4></div>
                            : null}
                        {team.length >= 12 ?
                            <div className="column"><h4>{playerShuffle[10]}</h4> VS <h4>{playerShuffle[11]}</h4></div>
                            : null}
                        {team.length >= 14 ?
                            <div className="column"><h4>{playerShuffle[12]}</h4> VS <h4>{playerShuffle[13]}</h4></div>
                            : null}
                        {team.length >= 16 ?
                            <div className="column"><h4>{playerShuffle[13]}</h4> VS <h4>{playerShuffle[14]}</h4></div>
                            : null}
                    </div>

                    <div class="ui equal width grid">
                    {roundOneWinners.length >= 4 ?
                            <div className="column"><h4>{playerShuffle[0]}</h4> VS <h4>{playerShuffle[1]}</h4></div>
                            : null}
                    </div>
                </div>

                <div className="teams-div">
                    <button className="ui secondary button" onClick={handleShuffle}>Shuffle Players</button>
                </div>

                <div className="teams-div">
                    <button className="ui secondary button" onClick={handleReset}>Reset</button>
                </div>
            </>
        )
    }
}

export default TournamentPage;