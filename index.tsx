import { useState } from "react";
import styled from 'styled-components/native'
import { Button, View, Switch, TextInput, Alert } from "react-native";

const MainContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`

const Box = styled(View)`
  width: 100px;
  height: 100px;
  background-color: black;
`

const RedView = styled(Box)`
  background-color: red;
`

const GreenView = styled(Box)`
  background-color: green;
`

const BlueView = styled(Box)`
  background-color: blue;
`

export default function Index() {
  return (
    <MainContainer>
      <RedView />
      <GreenView />
      <BlueView />
    </MainContainer>
  )
}