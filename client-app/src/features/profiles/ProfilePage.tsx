import React from 'react'
import { Grid } from 'semantic-ui-react'
import ProfileHeader from './ProfileHeader'

export default function ProfilePage() {
    return (
        <h1>
            <Grid>
                <Grid.Column width={16}>
                    <ProfileHeader />
                </Grid.Column>
            </Grid>
        </h1>
    )
}
