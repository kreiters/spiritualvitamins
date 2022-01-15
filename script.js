let d = new Date();
let day = d.getDay();
let prevDay = ((day - 1));
let nextDay = ((day + 1));
let imgMatrix = [{Evil: {img: "assets/scanned vitamins/evil.jpg"}},
 {Forgiveness: {img: "assets/scanned vitamins/forgiveness.jpg"}},
  {Happiness: {img: "assets/scanned vitamins/happiness.jpg"}},
   {Noah_1: {img: "assets/scanned vitamins/noah1.jpg"}},
    {Noah_2: {img: "assets/scanned vitamins/noah2.jpg"}},
     {Pray: {img: "assets/scanned vitamins/pray.jpg"}},
      {Spirit: {img: "assets/scanned vitamins/spirit.jpg"}},
       {Study: {img: "assets/scanned vitamins/study.jpg"}},
        {Sword: {img: "assets/scanned vitamins/sword.jpg"}},
         {Thankful: {img: "assets/scanned vitamins/thankful.jpg"}},
          {Think: {img: "assets/scanned vitamins/think.jpg"}},
          {Hope: {img: "assets/scanned vitamins/hope.jpg"}}];

let menuBtn = document.getElementById("menuBtn");
let infoScreen = document.getElementById("info");


// to access the scriptureMatrix, use: scriptureMatrix[0].Evil[0].sun
// or: scriptureMatrix[1].Forgiveness[0].sun
// or: scriptureMatrix[1].Forgiveness[1].mon   ....etc

let scriptureMatrix = [{Evil: [{sun: 'Psalm 105:1,3\n"O give thanks to the Lord, call upon His name. Make known His deeds among the people. Let the heart of those who seek the Lord be glad."'}, 
{mon: '3 John 1:11\n"Beloved, do not imitate what is evil, but what is good. The one who is good is of God. The one who does evil has not seen God."'},
 {tue: 'Matthew 6:13\n"And do not lead us into temptation, but deliver us from evil."'}, 
{wed: 'Proverbs 8:7\n"For my mouth will utter truth and wickedness is an abomination to my lips."'},
 {thu: 'John 3:20\n"For everyone who does evil hates the light, and does not come to the light, lest his deeds should be exposed."'}, 
{fri: '1 Chronicles 16:34\n"O give thanks to the Lord for He is good; for His lovingkindness is everlasting."'},
 {sat: 'Psalm 95:2-3\n"Let us come before the Lord\'s presence with thanksgiving, let us shout joyfully to Him with psalms. For the Lord is a great God and a great King above all gods."'},
 {bonus: '1 Thessalonians 1:3\n"We ought always to give thanks to God for you brethren...your faith is greatly enlarged and the love of each one of you towards one another grows even greater."'}]},
{Forgiveness: [{sun: 'Psalm 86:5\n"For you, Lord, are good and ready to forgive, and abundant in lovingkindness to all who call upon You."'}, 
{mon: '1 John 1:9\n"If we confess our sins, He (God) is faithful and righteous to forgive us our sins, and to cleanse us from all unrighteousness."'},
 {tue: 'Matthew 6:12\n"And forgive us our moral debts as we also have forgiven our moral debtors."'}, 
{wed: 'Matthew 6:14\n"For if you forgive men for their transgressions, your heavenly Father will also forgive you."'},
 {thu: 'Ephesians 4:32\n"And be kind to one another, tender hearted, forgiving each other, just as God in Christ also has forgiven you."'}, 
{fri: 'Luke 23:34\n"But Jesus was saying, \'Father forgive them; for they do not know what they are doing.\' And they cast lots, dividing up His garments among themselves."'},
 {sat: 'Matthew 18:21-22\n"Then Peter came to Jesus and said, \'How often shall my brother sin against me, and I forgive him? Up to seven times?\' Jesus said, \'Up to seventy times seven.\'"'}]},
 {Happiness: [{sun: '1 Chronicles 16:10\n"Glory in His holy name, let the heart of those who seek the Lord be glad."'}, 
 {mon: 'Proverbs 16:20\n"Blessed (happy) is he who trusts in the Lord."'},
  {tue: 'Romans 15:13\n"Now may the God of hope fill you with all joy and peace."'}, 
 {wed: 'Proverbs 14:21\n"Happy is he who is gracious to the poor."'},
  {thu: 'Psalm 132:9\n"Let your Godly people sing for joy."'}, 
 {fri: 'Psalm 144:5\n"How blessed (happy) are the people whose God is the Lord."'},
  {sat: 'Proverbs 29:18\n"Happy is he who keeps the law (God\'s Commandments)."'}]},
  {Noah_1: [{sun: "Genesis 1:31\nThen God looked over all He had made, and He saw that it was very good."}, 
  {mon: "Romans 6:13\nSurrender your whole being to God to be used for righteous purpose."},
   {tue: "Isaiah 30:15\nIn repentance and rest is your salvation, in quietness and trust is your strength."}, 
  {wed: 'John 7:37\nJesus stood and cried out, "If anyone thirsts, let him come to Me and drink." (living water)'},
   {thu: "Proverb 23:17\nDo not let your heart envy sinners, but live in fear of the Lord."}, 
  {fri: "Proverb 21:23\nHe (the person) who guards his/her tongue guards their soul from trouble."},
   {sat: "1 John 4:16\nAnd so we know and rely on the love God has for us. God is love."}]},
   {Noah_2: [{sun: "Psalm 2:11\nWorship the Lord with reverence and rejoice with trembling."}, 
   {mon: "Psalm 66:4\nAll the earth will worship You (God), and will sing praises to You."},
    {tue: "Isaiah 29:13\nPeople honor Me with their lips but their heart is far away from Me."}, 
   {wed: "John 4:24\nGod is spirit and those who worship Him must worship in spirit and truth."},
    {thu: "Exodus 34:14\nFor you shall not worship any other god, for the Lord, whose name is Jealous is a jealous God."}, 
   {fri: 'Matthew 4:10\nJesus said,"Begone Satan, for it is written: you shall worship the Lord your God, and serve Him only."'},
    {sat: "Revelation 4:11\nWorthy are You our Lord and our God, to receive glory and honor and power for You created all things."}]},
    {Pray: [{sun: 'Matthew 21:21-22\n"And Jesus answered and said to them, \'If you have faith, and do not doubt...everything you ask in prayer, believing, you shall receive.\'"'}, 
    {mon: 'Colossians 4:2\n"Devote yourself to prayer, keeping alert in it with an attitude of thanksgiving."'},
     {tue: 'Matthew 6:6\n"When you pray go into your inner room...shut your door, pray to your Father who is in secret, and your Father...will repay you."'}, 
    {wed: 'Matthew 5:44\n"But I say to you, \'Love your enemies and pray for those who persecute you.\'"'},
     {thu: 'Psalm 4:1\n"Answer me when I call O God of my righteousness, and God\'s ears attend to my prayer."'}, 
    {fri: '1 Thessalonians 5:17\n"Pray without ceasing."'},
     {sat: '1 Samuel 2:1\n"Then Hannah prayed and said, \'My heart exalts in the Lord...because I rejoice in Your salvation.\'"'}]},
     {Spirit: [{sun: 'Titus 3:6\n"For God abundantly poured out the Holy Spirit on us through Jesus Christ our Savior."'}, 
     {mon: '2 Timothy 1:14\n"Keep the good things that have been entrusted to you, through the power of the Holy Spirit who lives in us."'},
      {tue: 'Mark 1:18\n"I, John the Baptist baptize you with water, but Jesus will baptize you with the Holy Spirit."'}, 
     {wed: '1 John 4:2\n"This is how you will know it is God\'s Spirit: everyone who declares that Jesus Christ became mortal man has the Spirit Who comes from God."'},
      {thu: '1 John 4:13\n"This is how we are sure that we live in God and He lives in us: He has given us His Spirit."'}, 
     {fri: 'Ephesians 4:30\n"Do not grieve God\'s Holy Spirit, for the Spirit is God\'s ownership on you, a guarantee that the day will come when God sets you free."'},
      {sat: 'Galatians 5:25\n"The Spirit has given us life: He must also control our lives."'}]},
      {Study: [{sun: '1 Corinthians 1:18\n"For the Word of the cross is to those who are perishing foolishness; but to us who are being saved it is the power of God."'}, 
      {mon: '2 Timothy 3:16\n"All Scripture is inspired by God and profitable for teaching, reproof, correction, for training in righteousness that the man of God may be adequately equipped for every good work."'},
       {tue: '2 Peter 1:20-21\n"But know this first of all, that no prophesy of Scripture is a matter of one\'s own interpretation, for no prophesy was ever made by an act of human will, but men moved by the Holy Spirit spoke from God."'}, 
      {wed: 'Psalm 119:11\n"Your Word, Lord, I have treasured in my heart, that I may not sin against you."'},
       {thu: 'Isaiah 55:11\n"So shall My Word be which goes from my mouth; it shall not return to Me empty."'}, 
      {fri: 'Matthew 4:4\n"But He (Jesus) answered and said, \'Man shall not live on bread alone, but on every word that proceeds out of the mouth of God.\'"'},
       {sat: 'Matthew 25:13\n"Watch therefore, for you know neither the day nor the hour in which the Son of Man is coming."'}]},
       {Sword: [{sun: 'Ephesians 6:18\n"With all prayer and petition, PRAY at all times in the SPIRIT, with this in view, be on the alert with all perseverance and petition for all the saints."'}, 
       {mon: 'Ephesians 6:11\n"Put on the full ARMOR of God, that you may be able to stand firm against the schemes of the devil."'},
        {tue: 'Ephesians 6:14\n"Having girded your loins with TRUTH."'}, 
       {wed: 'Ephesians 6:14\n"Having put on the breastplate of RIGHTEOUSNESS."'},
        {thu: 'Ephesians 6:15\n"Having shod your feet with the preparation of the good news of PEACE."'}, 
       {fri: 'Ephesians 6:16\n"In addition to all, taking up the SHIELD OF FAITH."'},
        {sat: 'Ephesians 6:17\n"And take the HELMET OF SALVATION and the SWORD OF THE SPIRIT, which is the WORD OF GOD."'}]},
        {Thankful: [{sun: 'Psalm 105:1,3\n"O give thanks to the Lord, call upon His name. Make known His deeds among the people. Let the heart of those who seek the Lord be glad."'}, 
        {mon: 'Psalm 9:1\n"I will give thanks to the Lord with all my heart. I will tell of all Your wonders. I will be glad and exalt in You. I will sing praise to Your name, O Most High."'},
         {tue: 'Psalm 7:17\n"I will give to the Lord according to His righteousness and will sing praise to the name of the Lord Most High."'}, 
        {wed: 'Romans 6:17\n"But thanks be to God that though you were slaves to sin, you became obedient from the heart to that form of teaching to which you were committed."'},
         {thu: 'Ephesians 5:20\n"Always giving thanks for all things in the name of our Lord Jesus Christ to God even the Father."'}, 
        {fri: '1 Chronicles 16:34\n"O give thanks to the Lord for He is good; for His lovingkindness is everlasting."'},
         {sat: 'Psalm 95:2-3\n"Let us come before the Lord\'s presence with thanksgiving, let us shout joyfully to Him with psalms. For the Lord is a great God and a great King above all gods."'},
         {bonus: '1 Thessalonians 1:3\n"We ought always to give thanks to God for you brethren...your faith is greatly enlarged and the love of each one of you towards one another grows even greater."'}]},
         {Think: [{sun: 'TRUTH\nPsalm 145:18\n"The Lord is near to all who call upon Him, to all who call upon Him in TRUTH."'}, 
         {mon: 'HONESTY\nLuke 8:15\n"But the seed in the good soil, these are the ones who have heard the word in an HONEST and good heart, and hold it fast and bear fruit with perseverance."'},
          {tue: 'RIGHT\nPsalm 19:8\n"The precepts of the Lord are RIGHT, rejoicing the heart."'}, 
         {wed: 'PURITY\n1 Timothy 1:5\n"But the goal of our instruction is love from a PURE heart and a good conscience and a sincere faith."'},
          {thu: 'LOVELY\nIsaiah 52:7\n"How LOVELY on the mountains are the feet of him who brings good news, who announces peace and brings good news of happiness, and who announces salvation...your God reigns!"'}, 
         {fri: 'GOOD REPUTE\nJohn 12:36-38\n"These things Jesus spoke,...But though He had performed so many signs before them, yet they were not believing in Him...Lord, who has believed our REPORT?"'},
          {sat: 'EXCELLENCE\n1 Peter 2:9\n"But you are a chosen race, a royal priesthood, a holy nation, a people for God\'s own possession so that you may proclaim the EXCELLENCE of Him."'}]},
          {bonus: 'PRAISE\nPsalm 103:1\n"BLESS the Lord O my soul; and all that is within me, BLESS His Holy Name."'},
          {Hope: [{sun: 'Romans 5:5\n"And HOPE does not disappoint, because the love of God has been poured out within our hearts through the Holy Spirit Who was given us."'}, 
         {mon: '1 Peter 1:13\n"Therefore, with minds that are alert and fully sober, set your HOPE on the grace to be brought to you when Jesus Christ is revealed at His coming."'},
          {tue: 'Romans 8:24\n"For in HOPE we have been saved, but HOPE that is seen is not HOPE...but if we HOPE for what we do not see, with perseverance we wait eagerly for it."'}, 
         {wed: 'Titus 2:12-13\n"Instructing us to deny ungodliness...looking for the blessed HOPE and the appearing of the glory of our great God and Savior Christ Jesus."'},
          {thu: 'Romans 15:13\n"Now may the God of HOPE fill you with all joy and peace in believing that you may abound in HOPE by the power of the Holy Spirit."'}, 
         {fri: 'Psalm 130:5\n"I wait for the Lord, my soul does wait, and in His word do I HOPE."'},
          {sat: 'Psalm 33:18\n"But the eyes of the Lord are on those who fear Him, on those whose HOPE is in His unfailing love."'},
          {bonus: '1 Peter 3:15\n"But set apart Christ Jesus in your heart, always being ready to give a reason to everyone who asks you to give an account for the HOPE that is in you."'}]}];

let daysArray = ["Sacred Sunday", "Marvelous Monday", "Terrific Tuesday",
 "Wonderful Wednesday", "Thankful Thursday", "Fabulous Friday", "Satisfying Saturday"];
let shortDaysArray = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let daysMatrix = [{0: {prev: "6", next: "1"}}, {1: {prev: "0", next: "2"}},
 {2: {prev: "1", next: "3"}}, {3: {prev: "2", next: "4"}},
  {4: {prev: "3", next: "5"}}, {5: {prev: "4", next: "6"}},
   {6: {prev: "5", next: "0"}}];
let displayedDay = document.getElementById("day-display");
let displayedPrevDay = shortDaysArray[prevDay];
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let currentDay = day;
displayedDay.innerHTML = "";
const series = document.getElementsByTagName("dropdown-content a")
const jumpLinks = document.querySelectorAll("a[href^='#']");
let selection;
let viewSelection = document.getElementById("show-selection");
viewSelection.innerHTML = "";
//prevBtn.innerHTML = "";//clears day from button
//nextBtn.innerHTML = "";
let dailyScript;
let scriptView = document.getElementById("scripture");
let viewInstruct = document.getElementById("show-instructions");
let quoteMatrix = [{Evil: [{sun: 'QUOTE:\n\n"God would rather transform the EVIL man than eradicate him."\n(Billy Graham)'}, 
{mon: 'QUOTE:\n\n"Satan is EVIL in himself."\n(Peter Nii Korley)'},
 {tue: 'QUOTE:\n\n"It is in the close similarity between good and EVIL, right and wrong, that the danger lies."\n(Billy Graham)'}, 
{wed: 'QUOTE:\n\n"If you want to chart the course of your life and live a fulfilling life, restrain and refrain your tongue from EVIL."\n(Justice Kojo Bentil)'},
 {thu: 'QUOTE:\n\n"The entry of light forces the exit of the darkness (EVIL)."\n(Mike Murdock)'}, 
{fri: 'QUOTE:\n\n"EVIL is what disagrees with the provision God has made concerning a matter"\n(Justice Kojo Bentil)'},
 {sat: 'QUOTE:\n\n"This scripture says the love of money is the very root of Satan\'s operation. We can cut him off at the very root and destroy his base with the love of giving. Glory to God."\n(Kenneth M. Copeland)'},
 {bonus: 'QUOTE:\n\n"Anything good is hated by everything EVIL."\n(Mike Murdock)'}]},
{Forgiveness: [{sun: 'QUOTE:\n\n"To err is human, to forgive divine"\n(Alexander Pope)'}, 
{mon: 'QUOTE:\n\n"Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love."\n(Martin Luther King, Jr.)'},
 {tue: 'QUOTE:\n\n"Holding a grudge does not make you strong; it makes you bitter. Forgiving does not make you weak, it sets you free."\n(Dave Willis)'}, 
{wed: 'QUOTE:\n\n"There is a nobility in compassion, a beauty in empathy, a grace in forgiveness."\n(John Connolly)'},
 {thu: 'QUOTE:\n\n"Forgiveness is a funny thing. It warms the heart and cools the sting."\n(William Arthur Ward)'}, 
{fri: 'QUOTE:\n\n"The weak can never forgive. Forgiveness is the attribute of the strong."\n(Mahatmas Gandi)'},
 {sat: 'QUOTE:\n\n"A broken friendship that is mended through forgiveness can be even stronger than it ever was."\n(Stephan Richards)'}]},
 {Happiness: [{sun: '1 Chronicles 16:10\n"Glory in His holy name, let the heart of those who seek the Lord be glad."'}, 
 {mon: 'Proverbs 16:20\n"Blessed (happy) is he who trusts in the Lord."'},
  {tue: 'Romans 15:13\n"Now may the God of hope fill you with all joy and peace."'}, 
 {wed: 'Proverbs 14:21\n"Happy is he who is gracious to the poor."'},
  {thu: 'Psalm 132:9\n"Let your Godly people sing for joy."'}, 
 {fri: 'Psalm 144:5\n"How blessed (happy) are the people whose God is the Lord."'},
  {sat: 'Proverbs 29:18\n"Happy is he who keeps the law (God\'s Commandments)."'}]},
  {Noah_1: [{sun: "Genesis 1:31\nThen God looked over all He had made, and He saw that it was very good."}, 
  {mon: "Romans 6:13\nSurrender your whole being to God to be used for righteous purpose."},
   {tue: "Isaiah 30:15\nIn repentance and rest is your salvation, in quietness and trust is your strength."}, 
  {wed: 'John 7:37\nJesus stood and cried out, "If anyone thirsts, let him come to Me and drink." (living water)'},
   {thu: "Proverb 23:17\nDo not let your heart envy sinners, but live in fear of the Lord."}, 
  {fri: "Proverb 21:23\nHe (the person) who guards his/her tongue guards their soul from trouble."},
   {sat: "1 John 4:16\nAnd so we know and rely on the love God has for us. God is love."}]},
   {Noah_2: [{sun: "Psalm 2:11\nWorship the Lord with reverence and rejoice with trembling."}, 
   {mon: "Psalm 66:4\nAll the earth will worship You (God), and will sing praises to You."},
    {tue: "Isaiah 29:13\nPeople honor Me with their lips but their heart is far away from Me."}, 
   {wed: "John 4:24\nGod is spirit and those who worship Him must worship in spirit and truth."},
    {thu: "Exodus 34:14\nFor you shall not worship any other god, for the Lord, whose name is Jealous is a jealous God."}, 
   {fri: 'Matthew 4:10\nJesus said,"Begone Satan, for it is written: you shall worship the Lord your God, and serve Him only."'},
    {sat: "Revelation 4:11\nWorthy are You our Lord and our God, to receive glory and honor and power for You created all things."}]},
    {Pray: [{sun: 'QUOTE:\n\n"All I know is that when I pray, coincidences happen, and when I don\'t pray they don\'t happen.\n(Dan Hayes)"'}, 
    {mon: 'QUOTE:\n\n"God warms His hands at man\'s heart when man prays."\n(John Masefield)'},
     {tue: 'QUOTE:\n\n"Any concerns too small to be turned into prayer is too small to be made into a burden."\n(Corrie Ten Boom)'}, 
    {wed: 'QUOTE:\n\n"In worship God imparts Himself to us."\n(C.S. Lewis)'},
     {thu: 'QUOTE:\n\n"Prayer is exhaling the spirit of man and inhaling the Spirit of God."\n(Edwin Keith)'}, 
    {fri: 'QUOTE:\n\n"I have lived long enough to thank God that not all my prayers have been answered."\n(Jean Ingelow)'},
     {sat: 'QUOTE:\n\n"If your day is hemmed in with prayer, it is less likely to come unravelled."\n(Cynthia Lewis)'}]},
     {Spirit: [{sun: 'QUOTE:\n\n"Don\'t let obstacles along the road to eternity shake your confidence in God\'s promise. The Holy Spirit is God\'s seal that you will arrive."\n(David Jeremiah)'}, 
     {mon: 'QUOTE:\n\n"Were it not for the work of the Holy Spirit there would be no gospel, no faith, no church, no Christianity in the world at all."\n(J.I. Packer)'},
      {tue: 'QUOTE:\n\n"A sinner can no more repent and believe without the Holy Spirit\'s aid than he can create the world."\n(Charles Spurgeon)'}, 
     {wed: 'QUOTE:\n\n"The Holy Spirit can cast out the evil spirit of fear of man. He can make the coward brave."\n(Charles Spurgeon)'},
      {thu: 'QUOTE:\n\n"The Holy Spirit wants to convert the words of Scripture into transformed personalities."\n(David Jeremiah)'}, 
     {fri: 'QUOTE:\n\n"Without the Spirit of God, we can do nothing. We are as ships without wind. We are useless."\n(Charles Spurgeon)'},
      {sat: 'QUOTE:\n\n"The Bible without the Holy Spirit is a sundial by moonlight."\n(Dwight L. Moody)'}]},
      {Study: [{sun: 'QUOTE:\n\n"If one thing lies at the basis of the whole biblical teaching about God, it is that God knows all things."\n(J.G. Gresham Machem)'}, 
      {mon: 'QUOTE:\n\n"This is the power of the Scriptures - personally they speak, if we will listen, heed them, and let them take over; they will transform us forever."\n(Mark Clark)'},
       {tue: 'QUOTE:\n\n"The gospel is not a doctrine of the tongue, but of life."\n(John Calvin)'}, 
      {wed: 'QUOTE:\n\n"Let God\'s promises shine on your problems."\n(Corrie Ten Boom)'},
       {thu: 'QUOTE:\n\n"The Word of God well understood and religiously obeyed, is the shortest route to spiritual perfection."\n(A.W. Tozer)'}, 
      {fri: 'QUOTE:\n\n"Dear Father, teach me to hold fast to the Word of life. Give me a hunger for Scripture."\n(Kay Arthur)'},
       {sat: 'QUOTE:\n\n"Christ could come at any moment. I believe that with all my heart - not because of what I read in the newspapers, but because of what I read in Scripture."\n(John McArthur)'}]},
       {Sword: [{sun: 'QUOTE:\n\n"If we are instant in prayer and faithful in it, every little circumstance awakes the disposition to pray, and desires and words are always ready."\n(Felix Neff)'}, 
       {mon: 'QUOTE:\n\n"Our enemies are on every side, and so must our armor be."\n(William Goral)'},
        {tue: 'QUOTE:\n\n"The truth of Scripture demolishes speculation."\n(R.C. Sproul)'}, 
       {wed: 'QUOTE:\n\n"Liberty has brought us the freedom to be a slave of righteousness."\n(Charles Ryrie)'},
        {thu: 'QUOTE:\n\n"Jesus didn\'t commit the gospel to an advertising agency; he commissioned disciples."\n(Joseph Bayly)'}, 
       {fri: 'QUOTE:\n\n"Faith is the gaze of a soul upon a saving God."\n(A.W. Tozer)'},
        {sat: 'QUOTE:\n\n"When we fill our minds with Scripture and live accordingly to its principles, Satan\'s schemes lose their power over us."\n(Charles Stanley)'}]},
        {Thankful: [{sun: 'QUOTE:\n\n"Thanksgiving day is a jewel to set in the hearts of honest men; but be careful that you do not take the day and leave out the gratitude."\n(E.P. Powell)'}, 
        {mon: 'QUOTE:\n\n"The unthankful heart discovers no mercies; but the thankful heart will find, in every hour, some heavenly blessings."\n(Henry Ward Beecher)'},
         {tue: 'QUOTE:\n\n"So once in every year we throng upon a day apart, to praise the Lord with feast and song with thankfulness of heart."\n(Arthur Guiterman)'}, 
        {wed: 'QUOTE:\n\n"Reflect upon your present blessings, of which every man has plenty; not on your past misfortunes, of which all men have some."\n(Charles Dickens)'},
         {thu: 'QUOTE:\n\n"In happy moments, praise God. In difficult moments, seek God. In quiet moments, worship God. In painful moments, trust God. Every moment, thank God."\n(Rick Warren)'}, 
        {fri: 'QUOTE:\n\n"Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow."\n(Melody Beattie)'},
         {sat: 'QUOTE:\n\n"God is pleased with no music below so much as with the thankful songs of relieved widows and supported orphans; of rejoicing, comforted, and thankful persons."\n(Jeremy Taylor)'},
         {bonus: 'QUOTE:\n\n"Perhaps it takes a purer faith to praise God for unrealized blessings than for those we once enjoyed or those we enjoy now."\n(A.W. Tozer)'}]},
         {Think: [{sun: 'QUOTE:\n\n"There comes a time when one must take a position that is neither safe nor politic nor popular, but he must take it because concience tells him it is right."\n(Martin Luther King, Jr.)'}, 
         {mon: 'QUOTE:\n\n"Integrity is doing the right thing, even when no one is watching."\n(C.S. Lewis)'},
          {tue: 'QUOTE:\n\n"Praise, like sunshine, helps all things grow."\n(Croft M. Pentz)'}, 
         {wed: 'QUOTE:\n\n"Knowing what\'s right doesn\'t mean much unless you do what\'s right."\n(Theodore Roosevelt)'},
          {thu: 'QUOTE:\n\n"For I am persuaded that the Lord has more truth and light yet to break forth from His holy word."\n(John Robinson)'}, 
         {fri: 'QUOTE:\n\n"I hope I shall possess firmness and virtue enough to maintain what I consider the most enviable of all titles, the character of an honest man."\n(George Washington)'},
          {sat: 'QUOTE:\n\n"The right kind of heart is a kind heart like God\'s."\n(Unknown)'},
          {bonus: 'QUOTE:\n\n"The Word of God is perfect and pure, it is truth itself."\n(Martin Luther)'}]},
          {Hope: [{sun: 'QUOTE:\n\n"Do not look to HOPE, but to the source of your HOPE."\n(Charles Spurgeon)'}, 
         {mon: 'QUOTE:\n\n"If we are saved by grace alone, our salvation is a constant source of amazed delight...we don\'t take ourselves seriously and we\'re full of HOPE for the world."\n(Tim Keller)'},
          {tue: 'QUOTE:\n\n"True faith is ever connected to HOPE."\n(John Calvin)'}, 
         {wed: 'QUOTE:\n\n"Let us be alert to the season in which we are living. It is the season of the blessed HOPE."\n(A.W. Tozer)'},
          {thu: 'QUOTE:\n\n"Find ways of using your own platform to share the HOPE of Christ."\n(David Jeremiah)'}, 
         {fri: 'QUOTE:\n\n"All great things are simple and many can be expressed in a single word: freedom, justice, honor, duty, mercy, and HOPE."\n(Winston Churchill)'},
          {sat: 'QUOTE:\n\n"Where there is no vision, there is no HOPE!"\n(George Washington Carver)'},
          {bonus: 'QUOTE:\n\n"Jesus gives us HOPE because He keeps us company, has a vision, and knows the way we should go."\n(Max Lucado)'}]}];
let dailyQuote;

window.onload = function() {
    displayedDay.innerHTML = daysArray[day];
    if (day == "0") {
        prevDay = "6";
        console.log(prevDay);
    }
    if (day == "6") {
        nextDay = "0";
    }
    //prevBtn.innerHTML += shortDaysArray[prevDay];//adds day to button
    //nextBtn.innerHTML += shortDaysArray[nextDay];
    viewInstruct.style.display = "block";
}

menuBtn.addEventListener('click', event => {
  event.preventDefault();
  console.log("clicked on menu");
  infoScreen.style.display = "block";
});

function returnMain() {
  infoScreen.style.display = "none";
}

jumpLinks.forEach(link => {
 link.addEventListener('click', event => {
    event.preventDefault();
    selection = (link.innerHTML);
    imgMatrix.forEach(image => {
      //console.log(image)
      if (image[selection]) {
        //console.log(image[selection].img);
        let selectedImg = image[selection].img;
        //console.log(selectedImg);
        // let imgRef = selectedImg;
        // console.log(imgRef);
        viewSelection.src = selectedImg;
        // scriptView.classList.toggle('view');
        scriptView.classList.remove('showScripture');
      }
    })

    // resetting all day variables to the current day after a new series is selected
    let revertDay = d.getDay();
    console.log("revert day is: ", revertDay);
    displayedDay.innerHTML = daysArray[revertDay];
    day = d.getDay();
    currentDay = day;
    prevDay = ((day - 1));
    nextDay = ((day + 1));
  });
});




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function seriesSelect() {
  console.log("seriesSelect function running");
  viewInstruct.style.display = "none";
  console.log("the scriptView class is: ", scriptView.className);
  document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
    //   console.log(daysArray[day]);
    //   console.log(viewSelection)//display what was selected
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  function prev() {
      //console.log("the days matrix is: ", daysMatrix[day]);
    if (day == "0") {
        day = 6;
        console.log("The day was 0");
        currentDay = 6;
        prevDay = (daysMatrix[currentDay][currentDay].prev);
        nextDay = (daysMatrix[currentDay][currentDay].next);
        // nextDay = "0";
        // console.log("The current day is: ", daysArray[day]);
        // console.log("The prev day is: ", prevDay);
        // console.log("The next day is: ", nextDay);

        displayedDay.innerHTML = daysArray[currentDay];
        // prevBtn.innerHTML = shortDaysArray[prevDay];
        // nextBtn.innerHTML = shortDaysArray[nextDay];
        updateScripture()
        

    }
  
    else {
        day = day - 1;
        
        currentDay = currentDay - 1;
        prevDay = (daysMatrix[currentDay][currentDay].prev);
        nextDay = (daysMatrix[currentDay][currentDay].next);
        displayedDay.innerHTML = daysArray[currentDay];
        updateScripture()
        
    }
  }

  function next() {
        //console.log("the days matrix is: ", daysMatrix[day]);
    if (day == "6") {
        day = 0;
        console.log("The day was 6");
        currentDay = 0;
        prevDay = (daysMatrix[currentDay][currentDay].prev);
        nextDay = (daysMatrix[currentDay][currentDay].next);
        // nextDay = "0";
        // console.log("The current day is: ", daysArray[day]);
        // console.log("The prev day is: ", prevDay);
        // console.log("The next day is: ", nextDay);

        displayedDay.innerHTML = daysArray[currentDay];
        // prevBtn.innerHTML = shortDaysArray[prevDay];
        // nextBtn.innerHTML = shortDaysArray[nextDay];
        updateScripture()
        
    }
   
    else {
        day = day + 1;
        
        currentDay = currentDay + 1;
        prevDay = (daysMatrix[currentDay][currentDay].prev);
        nextDay = (daysMatrix[currentDay][currentDay].next);
        displayedDay.innerHTML = daysArray[currentDay];
        updateScripture()
        
    }
}

//this function opens the scripture when the vitamin front is clicked
viewSelection.addEventListener('click', event => {
  event.preventDefault();
  console.log("viewSelection function running");
  if (selection) {
    scriptView.classList.toggle('showScripture');
    console.log("the scriptView class is: ", scriptView.className);
    //console.log(shortDaysArray[currentDay]);
    //scriptureMatrix[0].Evil[0].sun
    //scriptureMatrix[1].Forgiveness[0].sun
    //scriptureMatrix[1].Forgiveness[1].mon
    updateScripture()//moved code below to the updateScripture function
    

  }
  
});
//gets the scripture for the current day
function updateScripture() {
  scriptView.innerHTML = "";
  console.log("scripture update function ran");
  scriptureMatrix.forEach(script => {
    //console.log(image)
    if (script[selection]) {
      console.log(script[selection]);
       script[selection].forEach(daily => {
         if (daily[shortDaysArray[currentDay]]) {
           console.log(daily[shortDaysArray[currentDay]]);
           dailyScript = daily[shortDaysArray[currentDay]];
          scriptView.innerHTML = daily[shortDaysArray[currentDay]];
         }

       })
      
    }

  });
}

scriptView.addEventListener('click', event => {
  event.preventDefault();
  console.log("clicked on scriptView element", dailyScript);
  viewChanger()
});

function viewChanger() {
  console.log("viewChanger function running. The scriptView.innerHTML = ", scriptView.innerHTML);
  if (scriptView.innerHTML === dailyScript) {
    dailyScript = "";
    updateQuote()
  }
  else if (scriptView.innerHTML === dailyQuote) {
    console.log("the dailyquote = ",dailyQuote)
    console.log("the scriptView.innerHTML contains: ",scriptView.innerHTML);
    updateScripture()
  }
}

function updateQuote() {
  scriptView.innerHTML = "";
  console.log("quote update function ran and the innerHTML contains: ", scriptView.innerHTML);
  quoteMatrix.forEach(quote => {
    if (quote[selection]) {
      console.log("here is the quote[selection]: ", quote[selection]);
       quote[selection].forEach(dayQuote => {
         if (dayQuote[shortDaysArray[currentDay]]) {
           console.log(dayQuote[shortDaysArray[currentDay]]);
           dailyQuote = dayQuote[shortDaysArray[currentDay]];
          scriptView.innerHTML = dayQuote[shortDaysArray[currentDay]];
          console.log("the quote added: ", dayQuote[shortDaysArray[currentDay]], "the innerHTML contains: ", scriptView.innerHTML);
         }
       })
    }
    
  });
}

function openMenu() {
  window.open('./pages/salvation.html', "_self");
}
function openLetter() {
  let letterSelect = ("../assets/letters/" + selection + ".html");//open the letter of the selected series
  window.open(letterSelect, "_self");
}
