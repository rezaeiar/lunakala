import React from 'react'
import FestivalBanner from '../FestivalBanner/FestivalBanner'
import NavigationBar from '../NavigationBar/NavigationBar'

export default function Header() {
    return (
        <header>
            <div className="">
                <FestivalBanner />
                <NavigationBar />
            </div>
        </header>
    )
}