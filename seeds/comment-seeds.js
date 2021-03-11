const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.',
        user_id: 6,
        post_id: 1
    },
    {
        comment_text: 'Cosmic ocean how far away rings of Uranus astonishment extraordinary claims require extraordinary evidence dispassionate extraterrestrial observer.',
        user_id: 6,
        post_id: 8
    },
    {
        comment_text: 'Hide at bottom of staircase to trip human prow?? ew dog you drink from the toilet, yum yum warm milk hotter pls, ouch too hot.',
        user_id: 3,
        post_id: 10
    },
    {
        comment_text: 'Try to jump onto window and fall while scratching at wall have secret plans.',
        user_id: 3,
        post_id: 11
    },
    {
        comment_text: "Sit on human have my breakfast spaghetti yarn and scream at teh bath making sure that fluff gets into the owner's eyes.",
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: "A cheeseburger is more than just a sandwich, it is a wish fulfilled.",
        user_id: 1,
        post_id: 8
    },
    {
        comment_text: 'Protein, iron, and calcium are some of the nutritional benefits associated with cheeseburgers.',
        user_id: 6,
        post_id: 7
    },
    {
        comment_text: 'Salad is essentially food for rabbits, so don’t bother wasting your time.',
        user_id: 7,
        post_id: 4
    },
    {
        comment_text: "There’s cheesy incarnation waiting for you no matter what your palate preferences are.",
        user_id: 6,
        post_id: 3
    },
    {
        comment_text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
        user_id: 6,
        post_id: 11
    },
    {
        comment_text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.',
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: 'Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog',
        user_id: 4,
        post_id: 9
    },
    {
        comment_text: 'Blue castello gouda cauliflower cheese. Cottage cheese cow cheese strings babybel stinking bishop blue castello port-salut cheesy feet.',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'Feta mascarpone croque monsieur. ',
        user_id: 6,
        post_id: 2
    },
    {
        comment_text: " Queso say cheese cheese triangles danish fontina camembert de normandie croque monsieur when the cheese comes out everybody's happy cheese slices. ",
        user_id: 8,
        post_id: 2
    },
    {
        comment_text: 'Jarlsberg cow cheddar.',
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: 'A mote of dust suspended in a sunbeam rich in mystery colonies shores of the cosmic ocean muse about corpus callosum.',
        user_id: 4,
        post_id: 6
    },
    {
        comment_text: 'Two ghostly white figures in coveralls and helmets are softly dancing hearts of the stars take root and flourish.',
        user_id: 9,
        post_id: 6
    },
    {
        comment_text:
            "Cambrian explosion venture light years Rig Veda dream of the mind's eye star stuff harvesting star light.",
        user_id: 7,
        post_id: 9
    },
    {
        comment_text: "Dream of the mind's eye prime number as a patch of light invent the universe cosmic fugue two ghostly white figures in coveralls and helmets are softly dancing.",
        user_id: 4,
        post_id: 5
    },
    {
        comment_text: "Across the centuries the ash of stellar alchemy hearts of the stars the only home we've ever known network of wormholes citizens of distant epochs.",
        user_id: 10,
        post_id: 1
    },
    {
        comment_text:'Qui animated corpse, cricket bat max brucks terribilem incessu zomby.',
        user_id: 2,
        post_id: 6
    },
    {
        comment_text: 'De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.',
        user_id: 10,
        post_id: 1
    },
    {
        comment_text: 'Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos.',
        user_id: 10,
        post_id: 7
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;