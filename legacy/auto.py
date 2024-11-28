item_names = [
    r"Konsultacja chirurgiczna",
    r"Kortykotomia (za ząb)",
    r"Usunięcie zęba stałego",
    r"Usunięcie zęba mlecznego",
    r"Ekstrakcja ósemki zatrzymanej",
    r"Dłutowanie zęba",
    r"Hemisekcja - amputacja korzenia",
    r"Resekcja wierzchołka korzenia",
    r"Mikroresekcja zęba z wypełnieniem wstecznym (mikroskop)",
    r"Odsłonięcie zęba zatrzymanego i naklejenie zamka",
    r"Usunięcie torbieli",
    r"Usunięcie zęba zatrzymanego",
    r"Plastyka połączenia z zatoką szczękową",
    r"Augmentacja z użyciem biomateriału",
    r"Szycie",
    r"Zdjęcie szwów",
    r"Podcięcie wędzidełka",
    r"Usunięcie dziąsła nad 8 ( zębem mądrości )",
    r"Szablon chirurgiczny",
]

item_prices = [
    r"200 zł",
    r"200 - 250 zł",
    r"180 - 400 zł",
    r"100 - 200 zł",
    r"450 - 900 zł",
    r"450 zł - 650 zł",
    r"650 zł",
    r"550  - 650 zł",
    r"2,500 zł",
    r"700 zł",
    r"450 - 650 zł",
    r"od 500 zł",
    r"350 zł",
    r"WYCENA INDYWIDUALNA",
    r"50 zł",
    r"50 zł",
    r"450 zł",
    r"350 zł",
    r"1,000 zł",
]

arr = []
for i in range(len(item_names)):
    temp = f"""
                        <li class="row ">
                           <span class="ps-4 action col-12 col-md-9">
                              {item_names[i]}
                           </span>
                           <span
                              class="ps-4 price col-12 col-md-3 d-flex justify-content-end align-items-end">
                              {item_prices[i]}
                           </span>
                        </li>
            """

    arr.append(temp)

with open("output.txt", "w") as f:
    for item in arr:
        f.write("%s\n" % item)
