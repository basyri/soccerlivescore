import React, { useEffect, useState } from 'react'
import Box from '../../components/Box/Box.module';
import Team from '../../components/Team/Team.module';
import { getMatchDetail } from "../../api/matchData";

const MatchDetail = ({ match }) => {

    const matchId = match.params.gameId
    const [game, setGame] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        console.log(matchId)
        getMatchDetail(matchId)
            .then(data => {
                console.log(data);
                if (data) {
                    setLoading(false)
                    setGame(data)
                }
            })
            .catch(err => console.log(err))

    }, [matchId])


    return (
        <>
            {
                loading ? <h3>Loading....</h3>
                    : (
                        <Box>
                            {game.home_team == undefined ?
                                <h3>Loading...</h3> : <Team team={game.home_team} />}
                            {game.home_team && game.away_team == undefined ?
                                <h1>Loading....</h1> :
                                <div style={{ textAlign: 'center' }}>
                                    <h2>
                                        {
                                            game.home_team &&
                                            game.home_team.score
                                        } : {game.away_team && game.away_team.score}
                                    </h2>
                                    <p>{game && game.keyEvents
                                        && game.keyEvents[game.keyEvents.length - 2]
                                        && game.keyEvents[game.keyEvents.length - 2].time
                                    }</p>
                                </div>
                            }
                            {game.away_team == undefined ? <h3>Loading...</h3> : <Team team={game.away_team} />}
                        </Box>
                    )}

            <div
                style={{
                    background: 'red',
                    height: '2px',
                    width: '80%',
                    margin: '0 .2rem'
                }}
            ></div>
            <ul
                style={{
                    display: 'flex',
                    fontSize: '.8rem',
                    listStyle: 'none',
                    justifyContent: 'space-between',
                    color: '#ccc',
                    margin: '.4rem .2rem'
                }}
            >
                <li>Game Details</li>
                <li>Highlight</li>
                <li>Chat</li>
            </ul>
            <ul style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                listStyle: 'none',
                margin: '1rem',
                fontSize: '.8rem',
                color: '#f57242'
            }}>
                <li style={{ alignSelf: 'flex-end', margin: '.8rem 0', flex: '1' }}>
                    <p>33' player name</p>
                </li>
                <li style={{ alignSelf: 'flex-start', margin: '.8rem 0', flex: '1' }}>
                    <p># player name 34'</p>
                </li>
                <li style={{ alignSelf: 'flex-end', margin: '.8rem 0', flex: '1' }}>
                    <p>player name 32+32'</p>
                </li>
                <li style={{ alignSelf: 'flex-start', margin: '.8rem 0', flex: '1' }}>
                    <p>65' player name</p>
                </li>
                <li style={{ alignSelf: 'flex-end', margin: '.8rem 0', flex: '1' }}>
                    <p>player name 67'</p>
                </li>
                <li style={{ alignSelf: 'flex-start', margin: '.8rem 0', flex: '1' }}>
                    <p>76' player name</p>
                </li>
            </ul>

        </>
    )
}

export default MatchDetail



