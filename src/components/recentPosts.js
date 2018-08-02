import React, { Component } from 'react';

import { connect } from 'react-redux'

import * as actions from '../actions'
import SearchBar from './searchBar';

class RecentPosts extends Component {
    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts__wrapper">
                    <div className="recent-posts__heading">Recent Posts</div>
                    <ul className="revent-posts__posts">
                        <li>recent post 0</li>
                        <li>recent post 1</li>
                        <li>recent post 2</li>

                    </ul>
                </div>

            </div>
        )
    }
}

export default connect(null, actions)(RecentPosts);