const dupeOptions = () => {
    const dupes = [
        "Abe",
        "Ada",
        "Ari",
        "Ashkan",
        "Banhi",
        "Bubbles",
        "Burt",
        "Camille",
        "Catalina",
        "Devon",
        "Ellie",
        "Frankie",
        "Gossmann",
        "Harold",
        "Hassan",
        "Jean",
        "Joshua",
        "Leira",
        "Liam",
        "Lindsay",
        "Mae",
        "Marie",
        "Max",
        "Meep",
        "Mi-Ma",
        "Nails",
        "Nikola",
        "Nisbet",
        "Otto",
        "Ren",
        "Rowan",
        "Ruby",
        "Stinky",
        "Travaldo",
        "Turner",
    ];
    return dupes.map((dupe) => {
        return (
            <option key={dupe} value={dupe}>
                {dupe}
            </option>
        );
    });
};

export default dupeOptions;
