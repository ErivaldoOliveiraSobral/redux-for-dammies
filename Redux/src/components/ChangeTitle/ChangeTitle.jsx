import React, { useState } from "react";
import { connect } from "react-redux";
import { tituloAlterado } from "../../store/actions/nomes";

import Card from "../Card/Card";

const ChangeTitle = (props) => {
    const { appTitle, handleChangeAppTitle } = props;

    //Hooks
    const [titleApp, setTitleApp] = useState(appTitle);

    return (
        <Card title="Alterar título" red>
            <input type="text" value={titleApp} onChange={e => setTitleApp(e.target.value)} />
            <input type="button" value="Alterar" onClick={() => handleChangeAppTitle(titleApp)} />
        </Card>
    );
};

const mapStateToProps = (state) => ({
    appTitle: state.nomes.appTitle
});

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeAppTitle(novoTitle) {
            dispatch(tituloAlterado(novoTitle));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTitle);