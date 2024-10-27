import React, { Component } from 'react'

export class ExpireAPIkey extends Component {
    render() {
        return (
            <div>

                <div className="alert alert-danger" role="alert">
                    <strong>
                    <p>status: "error",</p>
                    <p>code: "rateLimited",</p>
                    <p>message: "You have made too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests."</p>
                    </strong>
                </div>

            </div>
        )
    }
}

export default ExpireAPIkey
