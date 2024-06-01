import React from 'react'
import FestivalBanner from '../FestivalBanner/FestivalBanner'
import NavigationBar from '../NavigationBar/NavigationBar'

export default function Header() {
    return (
        <header className='sticky top-0 z-50'>
            <div>
                <FestivalBanner />
                <NavigationBar />
            </div>
        </header>
    )
}