export default function ExperienceBar() {
    return(
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div style={{ width: '60%' }}>
                    <span className="current-experience" style={{ left: '50%' }}>600 xp</span>
                </div>
            </div>
            <span>1000 xp</span>
        </header>
    )
}