import { useQuery } from "react-query"
import ActivityLists from "../components/ActivityLists"
import EmptyActivityLists from "../components/EmptyActivityLists"

import { AiOutlinePlus } from "react-icons/ai"
import { API } from "../config/api"
import { useEffect, useState } from "react"

const Dashboard = () => {

    let { data: groups, refetch } = useQuery('listGroupChache', async () => {
        const response = await API.get('activity-groups?email=nishkarta@gmail.com')
        return response.data.data
    })


    const [form] = useState({
        title: 'New Activity',
        email: 'nishkarta@gmail.com',
        comment: 'untuk membedakan list'

    })

    // const { title, email, comment } = form

    const addNewActivity = async (e) => {
        try {
            e.preventDefault()

            const response = await API.post('/activity-groups', form)
            refetch()
            return response

        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        refetch()
    }, [refetch])

    return (
        <div >
            <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: "55px" }}>
                <div><h1 data-cy="activity-title" className="group-title">Activity</h1></div>
                <div>
                    <button data-cy="activity-add-button" className="activity-add-button rounded-pill" onClick={addNewActivity}>
                        <AiOutlinePlus data-cy="tabler:plus" />
                        Tambah</button>
                </div>
            </div>

            {groups?.length === 0 ? <EmptyActivityLists /> : <ActivityLists groups={groups} refetch={refetch} />}


        </div>
    )
}

export default Dashboard