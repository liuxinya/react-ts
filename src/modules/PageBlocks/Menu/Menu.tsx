import React from 'react';
import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <div className="menu">
            <div className="test-menu">
                <Link to="/test1">test1test1test1test1test1</Link>
            </div>
            <div className="test-menu">
                <Link to="/test2">test2test2test2test2test2</Link>
            </div>
        </div>
    );
}