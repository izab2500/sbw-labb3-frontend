# 📄 Arbetslivserfarenhetshanterare

Detta är en webbapplikation där användare kan hantera sina arbetslivserfarenheter.  
Applikationen använder ett API och en MongoDb-databas för att lagra och hämta data.

## ✨ Funktionalitet

Med webbplatsen kan användare:

- Läsa sparade arbetslivserfarenheter  
- Lägga till en ny arbetslivserfarenhet  
- Uppdatera en sparad arbetslivserfarenhet  
- Radera en arbetslivserfarenhet  


## 🏗️ Struktur & sidor

### 📌 Arbetserfarenheter (index.html)

- Sparade arbetserfarenheter visas vid sidladdning  
- Användaren kan:
  - Uppdatera en arbetserfarenhet  
  - Radera en arbetserfarenhet  


### ➕ Lägg till arbete (add.html)

- Användaren kan lägga till en ny arbetserfarenhet  
- Data sparas persistent i en MongoDb-databas via API:et  


### ℹ️ Om webbplatsen (about.html)

- Innehåller information om webbplatsen och dess syfte  


## 🧩 Validering & logik

- Formulärdata valideras både på:
  - klientsidan   
  - serversidan 
  - Mongoose schema

- Detta förhindrar att tomma värden sparas i databasen  

- Formuläret renderas med JavaScript:
  - Anpassas beroende på om det är POST eller PUT
  - Rubrik och knapptext ändras

## 🎨 Design

- Responsiv design  
- HTML och CSS är validerad  

## 👀 Videodemonstration

[Gå till video](https://youtu.be/Ro6Yrb1-Q1Q)
