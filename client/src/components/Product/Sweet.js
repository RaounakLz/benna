import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clientCurrent } from '../../JS/clientSlice/clientSlice';
import { produitGet } from '../../JS/produitSlice';
import ProductCard from '../ProductCard';

import CardRaounak from '../CardRaounak.js';
function Sweet() {
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(clientCurrent());
    dispatch(produitGet());

    // dispatch(accessoireGet());

    // dispatch(vetementGet());
    // dispatch(commandeGet());
  }, []);

  const produit = useSelector((state => state.produit.produit));
  console.log(produit)
  return (

    // <div>{produit.map((el) => <AccesoireCard el={el} />)}</div>




    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", width: "100%", marginTop: "187px", marginLeft: "0px" }}>

      {produit?.filter((el) => el.categorie == "sweet").map((el) => <CardRaounak el={el} />)}
    </div>
  )
}

export default Sweet