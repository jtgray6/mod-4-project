
exports.seed = function(knex) {
  return knex('teams').del()
    .then(function () {
      return knex('teams').insert([
          {   
            id: 1,
            name: "Arizona Cardinals",
            needs: "OL, edge rusher, DL",
            logo_url: "https://sportslogohistory.com/wp-content/uploads/2017/12/arizona_cardinals_2005-pres.png"
        },{   
            id: 2,
            name: "Cincinnati Bengals",
            needs: "QB, OL, LB",
            logo_url: "https://sportslogohistory.com/wp-content/uploads/2017/12/cincinnati_bengals_2004-pres.png"
        },{   
            id: 3,
            name: "Denver Broncos",
            needs: "WR, OL, DL",
            logo_url: "https://sportslogohistory.com/wp-content/uploads/2017/12/denver_broncos_1997-pres.png"
        },{   
            id: 4,
            name: "Houston Texans",
            needs: "WR, DL, OL",
            logo_url: "https://sportslogohistory.com/wp-content/uploads/2017/12/houston_texans_2006-pres.png"
        },{   
            id: 5,
            name: "Kansas City Chiefs",
            needs: "CB, LB, RB",
            logo_url: "https://sportslogohistory.com/wp-content/uploads/2018/04/kansas_city_chiefs_1972-pres.png"
        },{   
            id: 6,
            name: "Tampa Bay Bucaneers",
            needs: "OL, DL, RB",
            logo_url: "https://sportslogohistory.com/wp-content/uploads/2017/12/tampa_bay_buccaneers_2014-pres.png"
        }]);
    }).then(() => {
      return knex('players').insert([
        {
    //Added Players
        //Arizona Cardinals
            id: 1,
            name: "De'Vondre Campbell",
            position: "LB"
        },{
            id: 2,
            name: "Kenyan Drake",
            position: "RB"
        },{
            id: 3,
            name: "Larry Fitzgerald",
            position: "WR"
        },{
            id: 4,
            name: "DeAndre Hopkins",
            position: "WR"
        },{
            id: 5,
            name: "Devon Kennard",
            position: "LB"
        },{
            id: 6,
            name: "Jordan Phillips",
            position: "DT"
        },{
        //Cincinnati Bengals
            id: 7,
            name: "Mackensie Alexander", 
            position: "CB"
        },{
            id: 8,
            name: "Vonn Bell", 
            position: "S"
        },{
            id: 9,
            name: "A.J. Green", 
            position: "WR"
        },{
            id: 10,
            name: "D.J. Reader", 
            position: "DT"
        },{
            id: 11,
            name: "Trae Waynes", 
            position: "CB"
        },{
        //Denver Broncos
            id: 12,
            name: "A.J. Bouye", 
            position: "CB"
        },{
            id: 13,
            name: "Jurrell Casey", 
            position: "DL"
        },{
            id: 14,
            name: "Graham Glasgow", 
            position: "OG"
        },{
            id: 15,
            name: "Melvin Gordon", 
            position: "RB"
        },{
            id: 16,
            name: "Sam Martin", 
            position: "P"
        },{
            id: 17,
            name: "Nick Vannett", 
            position: "TE"
        },{
        //Houston Texans
            id: 18,
            name: "Randall Cobb", 
            position: "WR"
        },{
            id: 19,
            name: "Ka'imi Fairbairn", 
            position: "K"
        },{
            id: 20,
            name: "Darren Fells", 
            position: "TE"
        },{
            id: 21,
            name: "Phillip Gaines", 
            position: "CB"
        },{
            id: 22,
            name: "Vernon Hargreaves III", 
            position: "CB"
        },{
            id: 23,
            name: "David Johnson", 
            position: "RB"
        },{
            id: 24,
            name: "AJ McCarron", 
            position: "QB"
        },{
            id: 25,
            name: "Eric Murray", 
            position: "S"
        },{
            id: 26,
            name: "Brent Qvale", 
            position: "T"
        },{
            id: 27,
            name: "Bradley Roby", 
            position: "CB"
        },{
            id: 28,
            name: "Jaylen Watkins", 
            position: "DB"
        },{
        //Kansas City Chiefs
            id: 29,
            name: "Antonio Hamilton", 
            position: "CB"
        },{
            id: 30,
            name: "Chad Henne", 
            position: "QB"
        },{
            id: 31,
            name: "Chris Jones", 
            position: "DT"
        },{
            id: 32,
            name: "Damien Williams", 
            position: "RB"
        },{
        //Tampa Bay Buccaneers
            id: 33,
            name: "Shaquil Barrett", 
            position: "Edge"
        },{
            id: 34,
            name: "Tom Brady", 
            position: "QB"
        },{
            id: 35,
            name: "Joe Haeg", 
            position: "OL"
        },{
            id: 36,
            name: "Kevin Minter", 
            position: "LB"
        },{
            id: 37,
            name: "Jason Pierre-Paul", 
            position: "Edge"
        },{
            id: 38,
            name: "Ndamukong Suh", 
            position: "DT"
        },{
    //Lost Players
        //Arizona Cardinals 
            //RB David Johnson
            id: 39,
            position: "WR",
            name: "Damiere Byrd"
        },{
            id: 40,
            position: "WR",
            name: "Pharoh Cooper"
        },{
            id: 41,
            position: "TE",
            name: "Charles Clay"
        },{
            id: 42,
            position: "OT",
            name: "Marcus Gilbert"
        },{
            id: 43,
            position: "OL",
            name: "A.Q. Shipley"
        },{
            id: 44,
            position: "DE",
            name: "Rodney Gunter"
        },{
            id: 45,
            position: "LB",
            name: "Joe Walker"
        },{
            id: 46,
            position: "LB",
            name: "Brooks Reed"
        },{
            id: 47,
        // Cincinnati Bengals
            position: "TE",
            name: "Tyler Eifert"
        },{
            id: 48,
            position: "OT",
            name: "Cordy Glenn"
        },{
            id: 49,
            position: "OG",
            name: "John Miller"
        },{
            id: 50,
            position: "DT",
            name: "Andrew Billings"
        },{
            id: 51,
            position: "CB",
            name: "Darqueze Dennard"
        },{
            id: 52,
            position: "CB",
            name: "B.W. Webb"
        },{
            id: 53,
            position: "S",
            name: "Clayton Fejedelem"
        },{
            
        // Denver Broncos
            id: 54,
            position: "QB",
            name: "Brandon Allen"
        },{
            id: 55,
            position: "QB",
            name: "Joe Flacco"
        },{
            id: 56,
            position: "OG",
            name: "Ronald Leary"
        },{
            id: 57,
            position: "C",
            name: "Connor McGovern"
        },{
            id: 58,
            position: "DL",
            name: "Shelby Harris"
        },{
            id: 59,
            position: "DE",
            name: "Derek Wolfe"
        },{
            id: 60,
            position: "CB",
            name: "Chris Harris Jr."
        },{
            id: 61,
            position: "CB",
            name: "Cyrus Jones"
        },{
            id: 62,
            position: "S",
            name: "Will Parks"
        },{
        // Houston Texans
            id: 63,
            position: "RB",
            name: "Carlos Hyde"
        },{
            id: 64,
            position: "RB",
            name: "Lamar Miller"
        },{
            // WR DeAndre Hopkins (Cardinals) **************
            // DT D.J. Reader (Bengals) ********************
            id: 65,
            position: "OLB",
            name: "Barkevious Mingo"
        },{
            id: 66,
            position: "CB",
            name: "Johnathan Joseph"
        },{
            id: 67,
            position: "S",
            name: "Jahleel Addae"
        },{
            id: 68,
            position: "S",
            name: "Mike Adams"
        },{
        // Kansas City Chiefs
            id: 69,
            position: "QB",
            name: "Matt Moore"
        },{
            id: 70,
            position: "RB",
            name: "LeSean McCoy"
        },{
            id: 71,
            position: "RB",
            name: "Spencer Ware"
        },{
            id: 72,
            position: "WR",
            name: "Demarcus Robinson"
        },{
            id: 73,
            position: "OG",
            name: "Stephen Wisniewski"
        },{
            id: 74,
            position: "OG",
            name: "Cameron Erving"
        },{
            id: 75,
            position: "DE",
            name: "Emmanuel Ogbah"
        },{
            id: 76,
            position: "LB",
            name: "Darron Lee"
        },{
            id: 77,
            position: "LB",
            name: "Reggie Ragland"
        },{
            id: 78,
            position: "CB",
            name: "Bashaud Breeland"
        },{
            id: 79,
            position: "CB",
            name: "Morris Claiborne"
        },{
            id: 80,
            position: "CB",
            name: "Kendall Fuller"
        },{
        // Tampa Bay Buccaneers
            id: 81,
            position: "QB",
            name: "Jameis Winston"
        },{
            id: 82,
            position: "QB",
            name: "Blaine Gabbert"
        },{
            id: 83,
            position: "RB",
            name: "Peyton Barber"
        },{
            id: 84,
            position: "WR",
            name: "Breshad Perriman"
        },{
            id: 85,
            position: "OT",
            name: "Demar Dotson"
        },{
            id: 86,
            position: "DE",
            name: "Carl Nassib"
        }])
    }).then(() => {
      return knex('additions').insert([
        {
    // team: "Arizona Cardinals",
            id: 1,
            team_id: 1,
            player_id: 1,
            details: "Agreed to a one-year deal worth up to $8.5 million, according to his agent."
        },{
            id: 2,
            team_id: 1,
            player_id: 2,
            details: "The team placed the transition tag on Drake."
        },{
            id: 3,
            team_id: 1,
            player_id: 3,
            details: "Re-signed with the Cardinals on a one-year contract worth up to $11 million with incentives, NFL Network Insider Ian Rapoport reported."
        },{
            id: 4,
            team_id: 1,
            player_id: 4,
            details: "Acquired in a trade with the Texans (along with a fourth-round pick) in exchange for RB David Johnson, as well as a 2020 second-round pick and 2021 fourth-rounder, Rapoport reported."
        },{
            id: 5,
            team_id: 1,
            player_id: 5,
            details: "Agreed to terms on a three-year, $20 million deal that includes $12.25 million guaranteed, per NFL Network's Mike Garafolo."
        },{
            id: 6,
            team_id: 1,
            player_id: 6,
            details: "Signing with the Cardinals on a three-year contract, per Rapoport."
        },{
    
        // team: "Cincinnati Bengals",      
            id: 7,
            team_id: 2,
            player_id: 7,
            details: "Signing a one-year, $4 million deal, Pelissero reported."
        },{
            id: 8,
            team_id: 2,
            player_id: 8,
            details: "Agreed to a three-year deal, Rapoport and Garafolo reported."
        },{
            id: 9,
            team_id: 2,
            player_id: 9,
            details: "The team placed the franchise tag on Green."
        },{
            id: 10,
            team_id: 2,
            player_id: 10,
            details: "Expected to sign a four-year, $53 million contract, per Rapoport."
        },{
            id: 11,
            team_id: 2,
            player_id: 11,
            details: "Agreed to a three-year, $42 million contract, per Rapoport and Pelissero."
        },{
    
            // team: "Denver Broncos",
            id: 12,
            team_id: 3,
            player_id: 12,
            details: "Acquired in a trade with the Jacksonville Jaguars in exchange for a 2020 fourth-round pick, Pelissero reported."
        },{
            id: 13,
            team_id: 3,
            player_id: 13,
            details: "Acquired in a trade with the Tennessee Titans in exchange for a seventh-round pick, Rapoport reported."
        },{
            id: 14,
            team_id: 3,
            player_id: 14,
            details: "Agreed to a four-year, $44 million deal, with $25 million guaranteed, per Rapoport."
        },{
            id: 15,
            team_id: 3,
            player_id: 15,
            details: "Agreed to terms with the Broncos on a two-year, $16 million deal with $13.5 million guaranteed, Rapoport reported."
        },{
            id: 16,
            team_id: 3,
            player_id: 16,
            details: "Agreed to a three-year, $7.05 million deal, Garafolo reported."
        },{
            id: 17,
            team_id: 3,
            player_id: 17,
            details: "Signed a two-year deal with the Broncos, Rapoport reported."
        },{
    
        // team: "Houston Texans",
            id: 18,
            team_id: 4,
            player_id: 18,
            details: "Agreed to a three-year, $27 million deal that includes $18.75 million guaranteed, reported NFL Network analyst James Jones."
        },{
            id: 19,
            team_id: 4,
            player_id: 19,
            details: "Re-signed with the Texans on a four-year, $17.65 million contract that includes $9 million guaranteed, Garafolo reported."
        },{
            id: 20,
            team_id: 4,
            player_id: 20,
            details: "Re-signed with the Texans on a two-year, $7 million, Rapoport reported."
        },{
            id: 21,
            team_id: 4,
            player_id: 21,
            details: "Agreed to terms with Texans, the team announced."
        },{
            id: 22,
            team_id: 4,
            player_id: 22,
            details: "Agreed to terms with Texans, the team announced."
        },{
            id: 23,
            team_id: 4,
            player_id: 23,
            details: "Acquired in a trade with the Cardinals (along with a 2020 second-round pick and 2021 fourth-rounder) in exchange for WR DeAndre Hopkins and a fourth-round pick, Rapoport reported."
        },{
            id: 24,
            team_id: 4,
            player_id: 24,
            details: "Re-signed with the Texans on a one-year, $4 million deal, of which $3.75 million is fully guaranteed, Pelissero reported."
        },{
            id: 25,
            team_id: 4,
            player_id: 25,
            details: "Agreed to terms with the Texans, the team announced"
        },{
            id: 26,
            team_id: 4,
            player_id: 26,
            details: "Agreed to terms with the Texans, the team announced."
        },{
            id: 27,
            team_id: 4,
            player_id: 27,
            details: "Roby has agreed to a three-year, $36 million contract to remain in Houston, according to NFL Network's James Palmer, Mike Garafolo and Ian Rapoport."
        },{
            id: 28,
            team_id: 4,
            player_id: 28,
            details: "Signing with the Texans on a two-year, $3 million deal, per Pelissero."
        },{
    
        // team: "Kansas City Chiefs",
            id: 29,
            team_id: 5,
            player_id: 29,
            details: "Signing a one-year deal with the Chiefs, Rapoport reported."
        },{
            id: 30,
            team_id: 5,
            player_id: 30,
            details: "Re-signed with Kansas City (terms not yet disclosed), the team announced."
        },{
            id: 31,
            team_id: 5,
            player_id: 31,
            details: "The team placed the franchise tag on Jones."
        },{
            id: 32,
            team_id: 5,
            player_id: 32,
            details: "The team picked up a $2.3 million contract option for 2020 on Williams."
        },{
    
        // team: "Tampa Bay Bucaneers",
            id: 33,
            team_id: 6,
            player_id: 33,
            details: "The team is placing the franchise tag on Barrett."
        },{
            id: 34,
            team_id: 6,
            player_id: 34,
            details: "Brady has signed with the Buccaneers on a two-year deal with $50 million guaranteed, according to Pelissero, with up to $4.5 million each year in performance-based incentives. Per Pelissero, the deal also includes a no-trade clause and a no-tag clause."
        },{
            id: 35,
            team_id: 6,
            player_id: 35,
            details: "Haeg is signing a one-year, $2.3 million deal with a chance to make $3.3 million, per Garafolo and Rapoport."
        },{
            id: 36,
            team_id: 6,
            player_id: 36,
            details: "Agreed to terms with the Buccaneers, the team announced."
        },{
            id: 37,
            team_id: 6,
            player_id: 37,
            details: "Re-signed with the Buccaneers on a two-year, $27 million deal, Rapoport reported."
        },{
            id: 38,
            team_id: 6,
            player_id: 38,
            details: "Expected to re-sign with the Buccaneers on a one-year, $8 million deal, Rapoport and Garafolo reported."
        }])
    }).then(() => {
      return knex('losses').insert([
        {
        //Arizona Cardinals
            id: 1,
            team_id: 1,
            player_id: 23
        },{
            id: 2,
            team_id: 1,
            player_id: 39
        },{
            id: 3,
            team_id: 1,
            player_id: 40
        },{
            id: 4,
            team_id: 1,
            player_id: 41
        },{
            id: 5,
            team_id: 1,
            player_id: 42
        },{
            id: 6,
            team_id: 1,
            player_id: 43
        },{
            id: 7,
            team_id: 1,
            player_id: 44
        },{
            id: 8,
            team_id: 1,
            player_id: 45
        },{
            id: 9,
            team_id: 1,
            player_id: 46
        },{
        //Cincinnati Bengals
            id: 10,
            team_id: 2,
            player_id: 47
        },{
            id: 11,
            team_id: 2,
            player_id: 48
        },{
            id: 12,
            team_id: 2,
            player_id: 49
        },{
            id: 13,
            team_id: 2,
            player_id: 50
        },{
            id: 14,
            team_id: 2,
            player_id: 51
        },{
            id: 15,
            team_id: 2,
            player_id: 52
        },{
            id: 16,
            team_id: 2,
            player_id: 53
        },{
        //Denver Broncos
            id: 17,
            team_id: 3,
            player_id: 54
        },{
            id: 18,
            team_id: 3,
            player_id: 55
        },{
            id: 19,
            team_id: 3,
            player_id: 56
        },{
            id: 20,
            team_id: 3,
            player_id: 57
        },{
            id: 21,
            team_id: 3,
            player_id: 58
        },{
            id: 22,
            team_id: 3,
            player_id: 59
        },{
            id: 23,
            team_id: 3,
            player_id: 60
        },{
            id: 24,
            team_id: 3,
            player_id: 61
        },{
            id: 25,
            team_id: 3,
            player_id: 62
        },{
        //Houston Texans
            id: 26,
            team_id: 4,
            player_id: 63
        },{
            id: 27,
            team_id: 4,
            player_id: 64
        },{
            id: 28,
            team_id: 4,
            player_id: 4
        },{
            id: 29,
            team_id: 4,
            player_id: 10
        },{
            id: 30,
            team_id: 4,
            player_id: 65
        },{
            id: 31,
            team_id: 4,
            player_id: 66
        },{
            id: 32,
            team_id: 4,
            player_id: 67
        },{
            id: 33,
            team_id: 4,
            player_id: 68
        },{
        //Kansas City Chiefs
            id: 34,
            team_id: 5,
            player_id: 69
        },{
            id: 35,
            team_id: 5,
            player_id: 70
        },{
            id: 36,
            team_id: 5,
            player_id: 71
        },{
            id: 37,
            team_id: 5,
            player_id: 72
        },{
            id: 38,
            team_id: 5,
            player_id: 73
        },{
            id: 39,
            team_id: 5,
            player_id: 74
        },{
            id: 40,
            team_id: 5,
            player_id: 75
        },{
            id: 41,
            team_id: 5,
            player_id: 76
        },{
            id: 42,
            team_id: 5,
            player_id: 77
        },{
            id: 43,
            team_id: 5,
            player_id: 78
        },{
            id: 44,
            team_id: 5,
            player_id: 79
        },{
            id: 45,
            team_id: 5,
            player_id: 80
        },{
        //Tampa Bay Buccanneers
            id: 46,
            team_id: 6,
            player_id: 81
        },{
            id: 47,
            team_id: 6,
            player_id: 82
        },{
            id: 48,
            team_id: 6,
            player_id: 83
        },{
            id: 49,
            team_id: 6,
            player_id: 84
        },{
            id: 50,
            team_id: 6,
            player_id: 85
        },{
            id: 51,
            team_id: 6,
            player_id: 86
        }])
    })
};
