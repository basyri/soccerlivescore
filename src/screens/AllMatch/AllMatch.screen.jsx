import React, { useEffect, useState } from 'react'
import Box from '../../components/Box/Box.module'
import Team from '../../components/Team/Team.module'
import MatchInfo from '../../components/MatchInfo/MatchInfo.module'
import {
    fetchMatches,
    getLiveMatch,
    getMatchDetail
} from "../../api/matchData";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const AllMatch = () => {


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetchMatches()
            .then(result => {
                if (result) {
                    let pageSize = 5
                    let dataPerPage = []

                    for (let i = 0; i < pageSize; i++) {
                        dataPerPage.push(result[i])
                    }

                    if (dataPerPage.length !== 0) {
                        setLoading(false)
                        setData(dataPerPage)
                    }

                    // console.log(dataPerPage[0].gameId);

                } else {
                    console.log('no data');
                }
            }).catch(err => console.log())

    }, [])



    return (
        <>
            <Box>
                <p>Local Team</p>
                <p>Visitor Team</p>
            </Box>
            {loading && <h3>loading....</h3>}
            {data && data.map((team, id) => (
                <Link key={id} to={`/match/${team.gameId}`}>
                    <Box >
                        <Team team={team.homeTeamEvent} />
                        <MatchInfo
                            teamA={team.homeTeamEvent}
                            teamB={team.awayTeamEvent}
                        />
                        <Team team={team.awayTeamEvent} />
                    </Box>
                </Link>
            ))}
        </>
    )
}

export default AllMatch
