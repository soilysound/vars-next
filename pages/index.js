import Head from 'next/head';
import Swatch from '../components/swatch';
import Gaps from '../components/gaps';

export default function Home() {
  return (
    <div className="flex-wrap flex-wrap-site-width flex-wrap-gutter gap-600">
      <Head>
        <title>Core guides</title>
        <link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="flex-wrap-full-width">
				<div className="flex-grid flex-wrap flex-wrap-site-width flex-wrap-gutter gap-600" style={{ "--basis": 0, "--grow": 0 }}>
				<img src="/sky-news-logo-dark.svg" alt="sky news logo" className="header-logo" />
				<nav className="header-nav">
					<ul class="flex-grid gap-600" style={{"--align": "flex-end"}}>
					<li><a href="#colors">Colors</a></li>
					<li><a href="#font-sizes">Font sizes</a></li>
					<li><a href="#spacing">Spacing</a></li>
				</ul></nav>
				</div>
			</header>

      <main className="flex-wrap gap-600">
        <h1 className="font-size-800">Vars v2.0</h1>
        <div className="flex-wrap gap-900">
					<div className="flex-wrap gap-500 swatch-list">
							<h2 className="font-size-500" id="colors">Colors</h2>
							<h3 className="font-size-300">Brand</h3>
							<div className="grid" style={{ "--basis": "160px" }}>
								<Swatch name="News Blue" cssvar="--brand-primary" />
								<Swatch name="News Red" cssvar="--brand-secondary" />
								<Swatch name="News Blue Linear" cssvar="--brand-primary-linear" />
								<Swatch name="News shade linear" cssvar="--brand-shade-linear" />
								<Swatch name="Breaking" cssvar="--breaking" />
								<Swatch name="Breaking linear" cssvar="--breaking-linear" />
								<Swatch name="Live" cssvar="--live" />
								<Swatch name="Live linear" cssvar="--live-linear" />
							</div>
              <h3 className="font-size-300">Theme aliases</h3>
							<div className="grid" style={{ "--basis": "160px" }}>
								<Swatch name="Page canvas" cssvar="--canvas" />
								<Swatch name="Page canvas shade" cssvar="--canvas-shade" />
								<Swatch name="Page canvas shade linear" cssvar="--canvas-shade-linear" />
								<Swatch name="Text color strong" cssvar="--text-color-strong" />
								<Swatch name="Text color" cssvar="--text-color" />
								<Swatch name="Text color secondary" cssvar="--text-color-secondary" />
								<Swatch name="Text color tertiary" cssvar="--text-color-tertiary" />
								<Swatch name="Text color on dark" cssvar="--text-color-on-dark" />
								<Swatch name="Component canvas" cssvar="--component-canvas" />
								<Swatch name="Component canvas shade" cssvar="--component-canvas-shade" />
								<Swatch name="Component canvas highlight" cssvar="--component-canvas-highlight" />
								<Swatch name="Component canvas important" cssvar="--component-canvas-important" />
								<Swatch name="Component canvas dark" cssvar="--component-canvas-dark" />
								<Swatch name="Border color" cssvar="--border-color" />
								<Swatch name="Border color strong" cssvar="--border-color-strong" />
              </div>
              <h3 className="font-size-300">Utility</h3>
              <div className="grid" style={{ "--basis": "160px" }}>
								<Swatch name="Link" cssvar="--link-color" />
								<Swatch name="Link on dark" cssvar="--link-color-on-dark" />
								<Swatch name="Success" cssvar="--success" />
								<Swatch name="Error" cssvar="--alert" />
              </div>
            </div>
            <div className="font-list flex-wrap">
                <h2 className="font-size-500" id="font-sizes">Font sizes</h2>
                <p className="font-size-100" data-label="--font-size-100: (14-16px)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio obcaecati exercitationem nulla eaque, repudiandae tempore tenetur corporis delectus esse, nemo vel reiciendis dolore fugiat? Alias, consequuntur? Eligendi, voluptatibus
                    unde?
                </p>
                <p className="font-size-200" data-label="--font-size-200: (16-18px)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio obcaecati exercitationem nulla eaque, repudiandae tempore tenetur corporis delectus esse, nemo vel reiciendis dolore fugiat?</p>
                <p className="font-size-300" data-label="--font-size-300: (18-22px)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio obcaecati exercitationem nulla eaque.</p>
                <p className="font-size-400" data-label="--font-size-400: (22-28px)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio obcaecati exercitationem nulla eaque.</p>
                <p className="font-size-500" data-label="--font-size-500: (26-34px)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio obcaecati exercitationem nulla eaque.</p>
                <p className="font-size-600" data-label="--font-size-600: (34-42px)">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="font-size-700" data-label="--font-size-700: (42-52px)">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="font-size-800" data-label="--font-size-800: (52-68px)">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="font-size-900" data-label="--font-size-900: (68-88px)">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="flex-wrap gaps-list">
              <h2 className="font-size-500" id="spacing">Spacing</h2>
							<div className="grid" style={{ "--basis": "240px" }}>
								<Gaps from='4' to='8' name="--gap-100"/>
								<Gaps from='8' to='12' name="--gap-200" />
								<Gaps from='12' to='18' name="--gap-300" />
								<Gaps from='16' to='24' name="--gap-400" />
								<Gaps from='20' to='30' name="--gap-500" />
								<Gaps from='28' to='40' name="--gap-600" />
								<Gaps from='36' to='52' name="--gap-700" />
								<Gaps from='46' to='70' name="--gap-800" />
								<Gaps from='62' to='92' name="--gap-900"/>
                </div>
                
            </div>
        </div>
			</main>
			
			<footer><a href="https://github.com/soilysound/vars-next" target="blank">https://github.com/soilysound/vars-next</a></footer>

    </div>
  )
}
