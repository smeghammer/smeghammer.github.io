##############################################################
#### CONFIGURATION -                                         #
#### core and site specific configuration parameters.        #
####                                                         #
#### DEPENDANCIES:  none.                                    #
##############################################################



##############################################################
#### the layout templates hashmap.                           #
#### The keys are stored against the nav entries below       #
##############################################################
%TEMPLATES = 
(
    HOME    => 'include/layout/home.tmpl',
    CONTENT1 => 'include/layout/content1.tmpl',
    CONTENT2 => 'include/layout/content2.tmpl',
    CONTENT3 => 'include/layout/content3.tmpl',
    CONTENT4 => 'include/layout/content4.tmpl',
    CONTENT5 => 'include/layout/content5.tmpl',
    CONTENT6 => 'include/layout/content6.tmpl',
    CONTENT7 => 'include/layout/content7.tmpl',
    CONTENT8 => 'include/layout/content8.tmpl',
    CONTENT9 => 'include/layout/content9.tmpl'
);

######################################################################
#### NAVIGATION DATA: 
#### The physical page must map to the name and location
#### specified below. The links are generated from this file, and there is
#### not currently any check that the target page exists.
####
#### NOTE that the converse will not cause a problem - the physical file will
#### exist, but will not be referenced from here, so no links will be
#### generated.
####
#### 
#### CALL HIERARCHY:
#### TODO...
####                                                         
#### DEPENDANCIES:
#### 1: The below MUST reflect the physical folder structure.
#### 2: The path parts MUST match a corresponding page in the level
#### above - 
####
#### /index.pl
#### /sect1.pl
#### /sect1/mypage.pl
####
#### IE if 'sect1.pl' has a number of child pages, they MUST be in the
#### sub directory /sect1/. This is because the navigation 
#### programmatic logic uses this model to determine self/sib/parent
#### etc.   
######################################################################


@nav2 = 
(
    {linkText => "Home",relativeUrl => "/index.pl", layoutTemplate => "HOME",},
    
    #S1:
    {linkText => "Bio",                 relativeUrl => "/bio.pl",                           layoutTemplate => "CONTENT1",   visible => "true"},
    #{linkText => "Awards &#38; Prizes", relativeUrl => "/bio/ap.pl",                        layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Recent compositions", relativeUrl => "/bio/comps.pl",                     layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Vocal",               relativeUrl => "/bio/comps/vocal.pl",               layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Instrumental",        relativeUrl => "/bio/comps/instrumental.pl",        layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Future compositions", relativeUrl => "/bio/futurecomps.pl",               layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Writings",            relativeUrl => "/bio/writings.pl",                  layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Dissertation",        relativeUrl => "/bio/writings/dissertation.pl",     layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Articles",            relativeUrl => "/bio/writings/articles.pl",         layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Reviews",             relativeUrl => "/bio/writings/reviews.pl",          layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Conference papers",   relativeUrl => "/bio/writings/papers.pl",           layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Future writings",     relativeUrl => "/bio/writings/futurewritings.pl",   layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Editorials",          relativeUrl => "/bio/writings/editorial.pl",        layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Poetry",              relativeUrl => "/bio/poetry.pl",                    layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Artworks",            relativeUrl => "/bio/artwork.pl",                   layoutTemplate => "CONTENT1",   visible => "true",},
    #{linkText => "Other interests",     relativeUrl => "/bio/other.pl",                     layoutTemplate => "CONTENT1",   visible => "true",},
    
    #S2:
    {linkText => "Compositions",        relativeUrl => "/scores.pl",                        layoutTemplate => "CONTENT2",   visible => "true",},
    {linkText => "Vocal works",         relativeUrl => "/scores/vocal.pl",                  layoutTemplate => "CONTENT2",   visible => "true",},
    {linkText => "Instrumental works",  relativeUrl => "/scores/instrumental.pl",           layoutTemplate => "CONTENT2",   visible => "true",},
    
    #S3:
    {linkText => "Writings",            relativeUrl => "/writings.pl",                      layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Articles",            relativeUrl => "/writings/articles.pl",             layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Dissertation",        relativeUrl => "/writings/articles/dissertation.pl",layoutTemplate => "CONTENT3",   visible => "true",},
    
    ## Test of L4 nav stuff:
    {linkText => "Chapter 1",           relativeUrl => "/writings/articles/dissertation/ch1.pl",layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Chapter 2",           relativeUrl => "/writings/articles/dissertation/ch2.pl",layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Labyrinth",           relativeUrl => "/writings/articles/labyrinth.pl",   layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Labyrinthxx",         relativeUrl => "/writings/articles/labyrinth/one.pl",layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Labyrinthyy",         relativeUrl => "/writings/articles/labyrinth/two.pl",layoutTemplate => "CONTENT3",   visible => "true",},
    
    {linkText => "Music at the Bauhaus",relativeUrl => "/writings/articles/bauhaus_music.pl",layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Musicmaking and Healing the Breach",relativeUrl => "/writings/articles/healingbreach.pl", layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Mechanisms &#38; Shadows",relativeUrl => "/writings/articles/mech_shadows.pl",layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Bauhaus essay (BMus yr3)",relativeUrl => "/writings/articles/bauhaus_essay.pl",layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Bartok&#39;s Sonata for 2 pianos &#38; percussion (Bmus yr2)",relativeUrl => "/writings/articles/bartok_sonata.pl",layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Beethoven&#39;s opus 59 no. 1 (Bmus yr1)",relativeUrl => "/writings/articles/beethoven_opus.pl",layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "[conf paper]",        relativeUrl => "/writings/articles/conf_paper.pl",  layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Reviews",             relativeUrl => "/writings/reviews.pl",              layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Music reviews",       relativeUrl => "/writings/reviews/music_reviews.pl",layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Other recent reviews",relativeUrl => "/writings/reviews/misc_reviews.pl", layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Reviews from prev occupations",relativeUrl => "/writings/reviews/old_reviews.pl",layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Conference papers",   relativeUrl => "/writings/conf_papers.pl",          layoutTemplate => "CONTENT3",   visible => "true",},
    {linkText => "Poetry",              relativeUrl => "/writings/poetry.pl",               layoutTemplate => "CONTENT3",   visible => "true",},
   
    #S4:
    {linkText => "Artworks",            relativeUrl => "/artworks.pl",                      layoutTemplate => "CONTENT4",   visible => "true",},
    {linkText => "Canterbury &#38; environs",relativeUrl => "/artworks/canterbury.pl",      layoutTemplate => "CONTENT4",   visible => "true",},
    {linkText => "Rome",                relativeUrl => "/artworks/rome.pl",                 layoutTemplate => "CONTENT4",   visible => "true",},
    {linkText => "People",              relativeUrl => "/artworks/people.pl",               layoutTemplate => "CONTENT4",   visible => "true",},
    {linkText => "Odds &#38; Sods",     relativeUrl => "/artworks/odds.pl",                 layoutTemplate => "CONTENT4",   visible => "true",},
    {linkText => "Architectural",       relativeUrl => "/artworks/architectural.pl",        layoutTemplate => "CONTENT4",   visible => "true",},
    
    #S5
    {linkText => "What others thought", relativeUrl => "/apprs.pl",                         layoutTemplate => "CONTENT5",   visible => "true",},
    
    #S6:
    {linkText => "Events",              relativeUrl => "/events.pl",                        layoutTemplate => "CONTENT6",   visible => "true",},
    {linkText => "Future events",       relativeUrl => "/events/future_events.pl",          layoutTemplate => "CONTENT6",   visible => "true",},
    {linkText => "Workshops",           relativeUrl => "/events/future_events/workshops.pl",layoutTemplate => "CONTENT6",   visible => "true",},
    {linkText => "Performances",        relativeUrl => "/events/future_events/performances.pl",layoutTemplate => "CONTENT6",   visible => "true",},
    {linkText => "Past events",         relativeUrl => "/events/past_events.pl",            layoutTemplate => "CONTENT6",   visible => "true",},
    
    #7: - this is a special case link - the stub has a 301 redirect and requires auth...
    {linkText => "Family",              relativeUrl => "/auth.pl",                          layoutTemplate => "CONTENT7",   visible => "true",},
    {linkText => "Family",              relativeUrl => "/family/family.pl",                 layoutTemplate => "CONTENT7",   visible => "true",},
    
    #S8:
    {linkText => "Contact",             relativeUrl => "/contact.pl",                       layoutTemplate => "CONTENT8",   visible => "true",},
    
    #S9:
    {linkText => "Links",               relativeUrl => "/links.pl",                         layoutTemplate => "CONTENT9",   visible => "true",}
);

1;#must always return 1.
