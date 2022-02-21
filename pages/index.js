import Head from 'next/head';
import Swatch from '../components/swatch';

export default function Home() {
  return (
    <div className="flex-wrap flex-wrap-site-width flex-wrap-gutter gap-400">
      <Head>
        <title>Core guides</title>
        <link rel="icon" href="/favicon.ico" />
			</Head>
			<header>Sky News</header>

      <main class="flex-wrap gap-600">
        <h1 className="font-size-800">Vars v2.0</h1>
        <div className="flex-wrap gap-900">
            <div className="flex-wrap gap-500 swatch-list">
							<h2>Brand</h2>
							<div className="grid" style={{ "--basis": "160px" }}>
								<Swatch name="News Blue" cssvar="--brand-primary" color="#063E7B" />
								<Swatch name="News Red" cssvar="--brand-secondary" />
								<Swatch name="News Blue Linear" cssvar="--brand-linear" />
								<Swatch name="Breaking" cssvar="--breaking" />
								<Swatch name="Breaking linear" cssvar="--breaking-linear" />
								<Swatch name="Live" cssvar="--live" />
								<Swatch name="Live linear" cssvar="--live-linear" />
							</div>
              <h2>Theme aliases</h2>
              <div className="grid" style={{ "--basis": "160px" }}>
								<Swatch name="Text color" cssvar="--text-color" color="#4A4A4A" />
								<Swatch name="Text color dark" cssvar="--text-color-dark" color="#4A4A4A" />
								<Swatch name="Text color secondary" cssvar="--text-color-secondary" color="#4A4A4A" />
								<Swatch name="Text color tertiary" cssvar="--text-color-tertiary" color="#4A4A4A" />
								<Swatch name="Text color on dark" cssvar="--text-color-on-dark" color="#4A4A4A" />
								<Swatch name="Page canvas" cssvar="--canvas" color="#4A4A4A" />
								<Swatch name="Page canvas shade" cssvar="--canvas-shade" color="#4A4A4A" />
								<Swatch name="Component canvas" cssvar="--component-canvas" color="#4A4A4A" />
							<Swatch name="Component canvas shade" cssvar="--component-canvas-shade" color="#4A4A4A" />
							<Swatch name="Border color" cssvar="--border-color" color="#4A4A4A" />
              </div>
              <h2>Utility</h2>
              <div className="grid" style={{ "--basis": "160px" }}>
								<Swatch name="Link" cssvar="--link-color" color="#063E7B" />
								<Swatch name="Link on dark" cssvar="--link-color-on-dark" />
								<Swatch name="Success" cssvar="--success" />
								<Swatch name="Error" cssvar="--alert" />
              </div>
            </div>
            <div className="font-list flex-wrap">
                <h2>Font sizes</h2>
                <p className="font-size-100" data-label="--font-size-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio obcaecati exercitationem nulla eaque, repudiandae tempore tenetur corporis delectus esse, nemo vel reiciendis dolore fugiat? Alias, consequuntur? Eligendi, voluptatibus
                    unde?
                </p>
                <p className="font-size-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio obcaecati exercitationem nulla eaque, repudiandae tempore tenetur corporis delectus esse, nemo vel reiciendis dolore fugiat?</p>
                <p className="font-size-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio obcaecati exercitationem nulla eaque.</p>
                <p className="font-size-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio obcaecati exercitationem nulla eaque.</p>
                <p className="font-size-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio obcaecati exercitationem nulla eaque.</p>
                <p className="font-size-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="font-size-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="font-size-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="font-size-900">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="flex-wrap gaps-list">
                <h2 className="font-size-500">Spacing gaps</h2>
                <div className="grid" style={{ "--basis": "240px" }}>
									<div class="thing" style={{"--gap": "var(--gap-100)"}}>--gap-100</div>
									<div class="thing" style={{"--gap": "var(--gap-200)"}}>--gap-200</div>
									<div class="thing" style={{"--gap": "var(--gap-300)"}}>--gap-300</div>
									<div class="thing" style={{"--gap": "var(--gap-400)"}}>--gap-400</div>
									<div class="thing" style={{"--gap": "var(--gap-500)"}}>--gap-500</div>
									<div class="thing" style={{"--gap": "var(--gap-600)"}}>--gap-600</div>
									<div class="thing" style={{"--gap": "var(--gap-700)"}}>--gap-700</div>
									<div class="thing" style={{"--gap": "var(--gap-800)"}}>--gap-800</div>
									<div class="thing" style={{"--gap": "var(--gap-900)"}}>--gap-900</div>
                </div>
                
            </div>
        </div>
			</main>
			
			<footer><a href="https://github.com/soilysound/vars-next" target="blank">https://github.com/soilysound/vars-next</a></footer>

    </div>
  )
}
