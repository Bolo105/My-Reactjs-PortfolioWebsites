
/* ---------------- <Pages /> ------------------- */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './home/Home'
import { StartAbout } from './start/startComp/StartAbout'
import { StartGallery } from './start/startComp/StartGallery'
import { StartServices } from './start/startComp/StartServices'
import { StartContact } from './start/startComp/StartContact'
import { EcommWeb } from './websites/ecomm/ecommComp/EcommWeb'
import { EcommSlider } from './websites/ecomm/ecommComp/EcommSlider'
import { EcommCollection } from './websites/ecomm/ecommComp/EcommCollection'
import { EcommSpecial } from './websites/ecomm/ecommComp/EcommSpecial'
import { EcommOffers } from './websites/ecomm/ecommComp/EcommOffers'
import { EcommBlog } from './websites/ecomm/ecommComp/EcommBlog'
import { EcommAbout } from './websites/ecomm/ecommComp/EcommAbout'
import { EcommPopular } from './websites/ecomm/ecommComp/EcommPopular'
import { EcommNews } from './websites/ecomm/ecommComp/EcommNews'
import { RestWeb } from './websites/rest/restComp/RestWeb'
import { RestHome } from './websites/rest/restComp/restHome'
import { RestAbout } from './websites/rest/restComp/restAbout'
import { RestWhy } from './websites/rest/restComp/restWhy'
import { RestMenu } from './websites/rest/restComp/restMenu'
import { RestGallery } from './websites/rest/restComp/restGallery'
import { RestTest } from './websites/rest/restComp/restTest'
import { RestQuestions } from './websites/rest/restComp/restQuestions'
import { RestTeam } from './websites/rest/restComp/restTeam'
import { RestBook } from './websites/rest/restComp/restBook'
import { RestContact } from './websites/rest/restComp/restContact'
import { RestFooter } from './websites/rest/restComp/restFooter'
import { GymWeb } from './websites/gym/gymComp/GymWeb'
import { GymHome } from './websites/gym/gymComp/GymHome'
import { GymWhyUs } from './websites/gym/gymComp/GymWhyUs'
import { GymOffers } from './websites/gym/gymComp/GymOffers'
import { GymEnviroment } from './websites/gym/gymComp/GymEnviroment'
import { GymPlan } from './websites/gym/gymComp/GymPlan'
import { GymTeam } from './websites/gym/gymComp/GymTeam'
import { GymFooter } from './websites/gym/gymComp/GymFooter'
import { BuildWeb } from './websites/build/buildComp/BuildWeb'
import { BuildHero } from './websites/build/buildComp/BuildHero'
import { BuildAbout } from './websites/build/buildComp/BuildAbout'
import { BuildServices } from './websites/build/buildComp/BuildServices'
import { BuildPortfolio } from './websites/build/buildComp/BuildPortfolio'
import { BuildTest } from './websites/build/buildComp/BuildTest'
import { BuildBlog } from './websites/build/buildComp/BuildBlog'
import { BuildContact } from './websites/build/buildComp/BuildContact'
import { BuildFooter } from './websites/build/buildComp/BuildFooter'
import { Layout } from './Layout'
import { FrontWeb } from './websites/front/frontComp/frontWeb'
import { FrontHero } from './websites/front/frontComp/frontHero'
import { FrontAbout } from './websites/front/frontComp/frontAbout'
import { FrontPortfolio } from './websites/front/frontComp/frontPortfolio'
import { FrontServices } from './websites/front/frontComp/frontServices'
import { FrontTeam } from './websites/front/frontComp/frontTeam'
import { FrontTest } from './websites/front/frontComp/frontTest'
import { FrontContact } from './websites/front/frontComp/frontContact'
import { FrontFooter } from './websites/front/frontComp/frontFooter'
import { EcommLayout } from './websites/ecomm/ecommComp/EcommLayout'
import { BuildLayout } from './websites/build/buildComp/BuildLayout'
import { FrontLayout } from './websites/front/frontComp/frontLayout'
import { RestLayout } from './websites/rest/restComp/RestLayout'
import { GymLayout } from './websites/gym/gymComp/GymLayout'
import { GymContact } from './websites/gym/gymComp/GymContact'
import { BooksWeb } from './websites/books/booksComp/BooksWeb'
import { BooksHome } from './websites/books/booksComp/BooksHome'
import { BooksLayout } from './websites/books/booksComp/BooksLayout'
import { BooksPopular } from './websites/books/booksComp/BooksPopular'
import { BooksAuthors } from './websites/books/booksComp/BooksAuthors'
import { BooksTemathics } from './websites/books/booksComp/BooksTemathic'
import { BooksFooter } from './websites/books/booksComp/BooksFooter'
import { StartProfile } from './start/startComp/StartProfile'




export const Pages = () => {
  return (
    <div>
          <Router>
             <Routes>
                 <Route path="/" element={<Layout><Home /></Layout>} />
                 <Route path='/startabout' element={<Layout><StartAbout /></Layout>}/>
                    <Route>
                       <Route path='/startprofile' element={<Layout><StartProfile /></Layout>}/>
                    </Route>
                 <Route path='/startgallery' element={<Layout><StartGallery /></Layout>}/>
                 <Route path='/react/websites/ecommweb' element={<EcommWeb />} />
                     <Route>
                          <Route path='/carouselExampleFade' element={<EcommLayout><EcommSlider /></EcommLayout>} />
                          <Route path='/ecommcollection' element={<EcommLayout><EcommCollection /></EcommLayout>} />
                          <Route path='/ecommspecial' element={<EcommLayout><EcommSpecial /></EcommLayout>} />
                          <Route path='/ecommoffers' element={<EcommLayout><EcommOffers /></EcommLayout>} />
                          <Route path='/ecommblog' element={<EcommLayout><EcommBlog /></EcommLayout>} />
                          <Route path='/ecommabout' element={<EcommLayout><EcommAbout /></EcommLayout>} />  
                          <Route path='/ecommpopular' element={<EcommLayout><EcommPopular /></EcommLayout>} />
                          <Route path='/ecommnews' element={<EcommLayout><EcommNews /></EcommLayout>} />
                     </Route>
                  <Route path='/react/websites/restweb' element={<RestWeb />} />
                     <Route>
                          <Route path='/resthome' element={<RestLayout><RestHome /></RestLayout>} />
                          <Route path='/restabout' element={<RestLayout><RestAbout /></RestLayout>} />
                          <Route path='/restwhyus' element={<RestLayout><RestWhy /></RestLayout>} />
                          <Route path='/restmenu' element={<RestLayout><RestMenu /></RestLayout>} />
                          <Route path='/restgallery' element={<RestLayout><RestGallery /></RestLayout>} />
                          <Route path='/resttestimonials' element={<RestLayout><RestTest /></RestLayout>} />  
                          <Route path='/restquestions' element={<RestLayout><RestQuestions /></RestLayout>} />
                          <Route path='/restteam' element={<RestLayout><RestTeam /></RestLayout>} />
                          <Route path='/restbook' element={<RestLayout><RestBook /></RestLayout>} />
                          <Route path='/restcontact' element={<RestLayout><RestContact /></RestLayout>} />
                          <Route path='/restfooter' element={<RestLayout><RestFooter /></RestLayout>} />
                     </Route>
                  <Route path='/react/websites/gymweb' element={<GymWeb />} />
                     <Route>
                          <Route path='/gymhome' element={<GymLayout><GymHome /></GymLayout>} />
                          <Route path='/gymwhyus' element={<GymLayout><GymWhyUs /></GymLayout>} />
                          <Route path='/gymoffers' element={<GymLayout><GymOffers /></GymLayout>} />
                          <Route path='/gymenviroment' element={<GymLayout><GymEnviroment /></GymLayout>} />
                          <Route path='/gymplan' element={<GymLayout><GymPlan /></GymLayout>} />  
                          <Route path='/gymteam' element={<GymLayout><GymTeam /></GymLayout>} />
                          <Route path='/gymcontact' element={<GymLayout><GymContact /></GymLayout>} />
                          <Route path='/gymfooter' element={<GymLayout><GymFooter /></GymLayout>} />
                     </Route>
                  <Route path='/react/websites/buildweb' element={<BuildWeb />} />
                     <Route>
                          <Route path='/buildhome' element={<BuildLayout><BuildHero /></BuildLayout>} />
                          <Route path='/buildabout' element={<BuildLayout><BuildAbout /></BuildLayout>} />
                          <Route path='/buildservices' element={<BuildLayout><BuildServices /></BuildLayout>} />
                          <Route path='/buildportfolio' element={<BuildLayout><BuildPortfolio /></BuildLayout>} />
                          <Route path='/buildtest' element={<BuildLayout><BuildTest /></BuildLayout>} />  
                          <Route path='/buildblog' element={<BuildLayout><BuildBlog /></BuildLayout>} />
                          <Route path='/buildcontact' element={<BuildLayout><BuildContact /></BuildLayout>} />
                          <Route path='/buildfooter' element={<BuildLayout><BuildFooter /></BuildLayout>} />
                     </Route>
                 <Route path='/react/websites/frontweb' element={<FrontWeb />} />
                     <Route>
                          <Route path='/fronthero' element={<FrontLayout><FrontHero /></FrontLayout>} />
                          <Route path='/frontabout' element={<FrontLayout><FrontAbout /></FrontLayout>} />
                          <Route path='/frontportfolio' element={<FrontLayout><FrontPortfolio /></FrontLayout>} />
                          <Route path='/frontservices' element={<FrontLayout><FrontServices /></FrontLayout>} />
                          <Route path='/frontteam' element={<FrontLayout><FrontTeam /></FrontLayout>} />  
                          <Route path='/fronttest' element={<FrontLayout><FrontTest /></FrontLayout>} />
                          <Route path='/frontcontact' element={<FrontLayout><FrontContact /></FrontLayout>} />
                          <Route path='/frontfooter' element={<FrontLayout><FrontFooter /></FrontLayout>} />
                     </Route>
                     <Route path='/react/websites/booksweb' element={<BooksWeb />} />
                     <Route>
                          <Route path='/bookshome' element={<BooksLayout><BooksHome /></BooksLayout>} />
                          <Route path='/bookspopular' element={<BooksLayout><BooksPopular /></BooksLayout>} />
                          <Route path='/booksauthors' element={<BooksLayout><BooksAuthors /></BooksLayout>} />
                          <Route path='/bookstemathics' element={<BooksLayout><BooksTemathics /></BooksLayout>} />
                          <Route path='/booksfooter' element={<BooksLayout><BooksFooter /></BooksLayout>} />
                     </Route>
                 <Route path='/startservices' element={<Layout><StartServices /></Layout>}/>
                 <Route path='/startcontact' element={<Layout><StartContact /></Layout>}/>
             </Routes>
             </Router>
    </div>
  )
}