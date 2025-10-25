const ProfilPage = ({close}) => {
    const closeProfil = (e) => {
        e.stopPropagation()
    }

    return <section className="profil" onClick={close}>
        <div className="profil__main" onClick={closeProfil}>
            profil
        </div>
    </section>
}

export default ProfilPage;