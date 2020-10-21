import React, { Suspense, useEffect } from 'react';
import { NavigationBar } from '../components/navigation_bar/navigation_bar';
import { Route, Switch, useHistory } from 'react-router-dom';
import { StudentDashboard } from '../screens/student_dashboard/view/student_dashboard';
import { CertificateDetails } from '../screens/certificate_details/view/certificate_details';
import { AddCertificate } from '../screens/add_certificate/view/add_certificate';
import { StudentList } from '../screens/student_list/view/student_list';
import { PendingApprovals } from '../screens/pending_approvals/view/pending_approvals';
import { UserRegistration } from '../screens/user_registration/view/user_registration';

export const Layout = () => {

    let routes = (
        <Switch>
            <Route path="/registration" exact component={UserRegistration} />
            <Route path="/certificates" exact />
            <Route path="/students" exact component={StudentList} />
            <Route path="/pending_approvals" exact component={PendingApprovals} />
            <Route path="/add_certificate" exact component={AddCertificate} />
            <Route path="/certificate/:address" component={CertificateDetails} />
            <Route path="/profile" exact component={StudentDashboard} />
            <Route path="/" render={props => <div>Home</div>} />
        </Switch>
    );
    return (
        <div>
            <NavigationBar />

            {/* This will load the proper page according to the given route */}
            <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
        </div>
    )
}
