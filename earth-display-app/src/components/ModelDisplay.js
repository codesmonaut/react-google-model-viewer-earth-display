import '@google/model-viewer/dist/model-viewer';
import earthModel from '../model/earth.glb';
import spaceSkybox from '../model/space-skybox.png';

const ModelDisplay = () => {

    return (
        <div className="model-display">
            <model-viewer
                src={earthModel}
                alt="3D Earth Model"
                camera-controls
                min-camera-orbit="auto auto 40.79m"
                min-field-of-view="30deg"
                skybox-image={spaceSkybox}
            ></model-viewer>
        </div>
    )
}

export default ModelDisplay;