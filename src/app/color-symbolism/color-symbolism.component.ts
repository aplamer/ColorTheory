import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-symbolism',
  templateUrl: './color-symbolism.component.html',
  styleUrls: ['./color-symbolism.component.css']
})
export class ColorSymbolismComponent implements OnInit {
  //array that stores all color symbolism possibilities
  symbolisms = [
    //General Section
    {
      color: "Red",
      meaning: ["Passion", "Power", "Danger", "Violence"],
      origin: ["General"],
      style: "red"
    },
    {
      color: "Orange",
      meaning: ["Energy", "Warmth", "Enthusiasm", "Kindness"],
      origin: ["General"],
      style: "orange"
    },
    {
      color: "Yellow",
      meaning: ["Playfulness", "Cowardice", "Happiness", "Youth"],
      origin: ["General"],
      style: "yellow"
    },
    {
      color: "Green",
      meaning: ["Nature", "Growth", "Fertility", "Vigor"],
      origin: ["General"],
      style: "green"
    },
    {
      color: "Blue",
      meaning: ["Loyalty", "Peace", "Harmony", "Truth", "Order"],
      origin: ["General"],
      style: "blue"
    },
    {
      color: "Purple",
      meaning: ["Luxury", "Royalty", "Magic", "Spirituality"],
      origin: ["General"],
      style: "blueviolet"
    },
    {
      color: "Pink",
      meaning: ["Love", "Acceptance", "Sensitivity", "Sweetness"],
      origin: ["General"],
      style: "pink"
    },
    {
      color: "White",
      meaning: ["Purity", "Simplicity", "Cleanliness", "Innocence"],
      origin: ["General"],
      style: "white"
    },
    {
      color: "Black",
      meaning: ["Elegance", "Sophistication", "Mourning", "Mystery"],
      origin: ["General"],
      style: "rgb(61, 61, 61)"
    },
    {
      color: "Brown",
      meaning: ["Stability", "Comfort", "Reliability", "Poverty"],
      origin: ["General"],
      style: "rgb(117, 68, 39)"
    },

    //Red Section
    {
      color: "Red",
      meaning: ["Masculinity"],
      origin: ["UK", "France"],
      style: "red"
    },
    {
      color: "Red",
      meaning: ["Danger"],
      origin: ["USA", "Mexico"],
      style: "red"
    },
    {
      color: "Red",
      meaning: ["Unluckiness"],
      origin: ["Nigeria", "Chad", "Germany"],
      style: "red"
    },
    {
      color: "Red",
      meaning: ["Luck"],
      origin: ["Denmark", "Argentina", "Egypt"],
      style: "red"
    },
    {
      color: "Red",
      meaning: ["Vitality"],
      origin: ["Nigeria"],
      style: "red"
    },
    {
      color: "Red",
      meaning: ["Mourning"],
      origin: ["South Africa"],
      style: "red"
    },
    {
      color: "Red",
      meaning: ["Luck", "Marriage"],
      origin: ["China"],
      style: "red"
    },
    {
      color: "Red",
      meaning: ["Love"],
      origin: ["China", "Japan", "South Korea"],
      style: "red"
    },
    {
      color: "Red",
      meaning: ["Hapinness"],
      origin: ["Japan"],
      style: "red"
    },
    {
      color: "Red",
      meaning: ["Ambition"],
      origin: ["India"],
      style: "red"
    },

    //Orange Section
    {
      color: "Orange",
      meaning: ["Bravery"],
      origin: ["Ukraine"],
      style: "orange"
    },
    {
      color: "Orange",
      meaning: ["Sacredness"],
      origin: ["Hinduism", "Buddhism"],
      style: "orange"
    },

    //Yellow Section
    {
      color: "Yellow",
      meaning: ["Warmth"],
      origin: ["USA"],
      style: "yellow"
    },
    {
      color: "Yellow",
      meaning: ["Evil"],
      origin: ["France"],
      style: "yellow"
    },
    {
      color: "Yellow",
      meaning: ["Envy"],
      origin: ["Germany", "Russia"],
      style: "yellow"
    },
    {
      color: "Yellow",
      meaning: ["Fertility"],
      origin: ["Colombia"],
      style: "yellow"
    },
    {
      color: "Yellow",
      meaning: ["Happiness", "Dependability"],
      origin: ["China"],
      style: "yellow"
    },
    {
      color: "Yellow",
      meaning: ["Wealth"],
      origin: ["Japan"],
      style: "yellow"
    },
    {
      color: "Yellow",
      meaning: ["Luck"],
      origin: ["Thailand"],
      style: "yellow"
    },

    //Green Section
    {
      color: "Green",
      meaning: ["Luck"],
      origin: ["Ireland"],
      style: "green"
    },

    {
      color: "Green",
      meaning: ["Inexperienced"],
      origin: ["Western"],
      style: "green"
    },
    {
      color: "Green",
      meaning: ["Greed"],
      origin: ["USA"],
      style: "green"
    },

    {
      color: "Green",
      meaning: ["Envy"],
      origin: ["Belgium", "USA"],
      style: "green"
    },
    {
      color: "Green",
      meaning: ["Independence"],
      origin: ["Mexico"],
      style: "green"
    },
    {
      color: "Green",
      meaning: ["Trustworthiness"],
      origin: ["China"],
      style: "green"
    },
    {
      color: "Green",
      meaning: ["Danger"],
      origin: ["Malaysia"],
      style: "green"
    },
    {
      color: "Green",
      meaning: ["Love"],
      origin: ["Japan"],
      style: "green"
    },

    //Blue Section

    {
      color: "Blue",
      meaning: ["Grace", "Heaven"],
      origin: ["Catholic"],
      style: "blue"
    },
    {
      color: "Blue",
      meaning: ["Warmth"],
      origin: ["Netherlands"],
      style: "blue"
    },
    {
      color: "Blue",
      meaning: ["Cold", "Masculinity"],
      origin: ["USA", "Sweden"],
      style: "blue"
    },
    {
      color: "Blue",
      meaning: ["Femininity"],
      origin: ["netherlands"],
      style: "blue"
    },
    {
      color: "Blue",
      meaning: ["Trustworthiness"],
      origin: ["USA"],
      style: "blue"
    },
    {
      color: "Blue",
      meaning: ["Death"],
      origin: ["Iran"],
      style: "blue"
    },
    {
      color: "Blue",
      meaning: ["Cold", "Evil"],
      origin: ["East Asia"],
      style: "blue"
    },
    {
      color: "Blue",
      meaning: ["Dependability"],
      origin: ["Japan", "Korea"],
      style: "blue"
    },

    //Purple Section

    {
      color: "Purple",
      meaning: ["Religion"],
      origin: ["Christianity"],
      style: "blueviolet"
    },
    {
      color: "Purple",
      meaning: ["Envy"],
      origin: ["Mexico"],
      style: "blueviolet"
    },
    {
      color: "Purple",
      meaning: ["Mourning"],
      origin: ["Brazil", "Thailand"],
      style: "blueviolet"
    },
    {
      color: "Purple",
      meaning: ["Evil", "Impurity"],
      origin: ["Japan"],
      style: "blueviolet"
    },
    {
      color: "Purple",
      meaning: ["High Quality"],
      origin: ["China", "South Korea"],
      style: "blueviolet"
    },

    //Pink Section
    {
      color: "Pink",
      meaning: ["Trust"],
      origin: ["South Korea"],
      style: "pink"
    },
    {
      color: "Pink",
      meaning: ["Femininity"],
      origin: ["USA"],
      style: "pink"
    },

    //White Section
    {
      color: "White",
      meaning: ["Marriage"],
      origin: ["USA"],
      style: "white"
    },
    {
      color: "White",
      meaning: ["Happiness"],
      origin: ["Australia", "New Zealand"],
      style: "white"
    },
    {
      color: "White",
      meaning: ["Death", "Mourning"],
      origin: ["East Asia"],
      style: "white"
    },
    {
      color: "White",
      meaning: ["Purity"],
      origin: ["India"],
      style: "white"
    },

    //Black Section
    {
      color: "Black",
      meaning: ["Death"],
      origin: ["Western"],
      style: "rgb(61, 61, 61)"
    },
    {
      color: "Black",
      meaning: ["Independence"],
      origin: ["Italy"],
      style: "rgb(61, 61, 61)"
    },
    {
      color: "Black",
      meaning: ["Maturity"],
      origin: ["Africa"],
      style: "rgb(61, 61, 61)"
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    //page will navigate to general component by default
  }

  //function to generate general component
  clickGeneral(){
    this.router.navigate(['/color-symbolism/general']);
    this.filtered = "";
  }

  //function to generate eastern component
  clickEastern(){
    this.router.navigate(['/color-symbolism/eastern']);
    this.filtered = "";
  }

  //function to generate western component
  clickWestern(){
    this.router.navigate(['/color-symbolism/western']);
    this.filtered = "";
  }

  //2 way binded string that changed based on what is inputted into the search bar
  filtered = "";
}
