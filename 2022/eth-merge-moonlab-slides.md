---
title: Ethereum Roadmap
description: The merge, surge, verge, purge and a splurge. For https://www.moonlab.space/ event.
date: 2022-09-21
duration: 20 minuets
author: Dan Shields <nukemandan@protonmail.com>
event-url: https://www.meetup.com/cryptorado-community/events/288436888/
---

# Ethereum Roadmap

---

<widget-speaker name="Dan Shields" position="Engineer @ Parity & Steward @ Cryptorado" image="assets/img/shared/ice-falls-small-circle.png" github="nukemandan" twitter="nukemandan" linkedin="danwshields" matrix="dan.shields:matrix.parity.io"></widget-speaker>

---

# The merge, surge, verge, purge and a splurge

---

## ... but first

<widget-text center>

1. Merge already covered 😉
1. Layer 2 protocols & rollups now and to come
1. Why not multi-chain & bridges?

Notes:

<widget-text center>

Today there are many L2 protocols in production. Most use _settlement_ of ETH as base layer for reference.
Types:

1. Optimistic
1. ZK

---

# The Surge

---

## The Surge

_AKA [Ethereum sharding](https://ethereum.org/en/upgrades/sharding/)_

<br>

<widget-img style="width: 700px; border-radius: 3%;" src="/assets/img/eth/beacon_chain.jpg" alt="https://vitalik.ca/general/2021/04/07/sharding.html"/>

---

## Sharding

<widget-text center>

Sharding is the process of **splitting a database horizontally** to spread the load.
<br><br>
The work of producing, validating, and storing blocks is split up across the network.

Notes:

- scaling (surge in throughput)
- lower the cost of rollups and/or bundled transactions
- make it easier for users to operate nodes (less resources needed)

---

## Sharding

<widget-text center>

Validators in PoS are _assigned at random_ to a shard committee

<br>

<widget-img style="width: 750px; border-radius: 3%;" src="/assets/img/eth/committees.png" alt="https://vitalik.ca/general/2021/04/07/sharding.html"/>

---

## Sharding

<widget-text center>

1. When a validator verifies a block,<br>they publish a signature attesting to it.
1. Everyone else, instead of verifying 100 entire blocks,<br>now only verifies 10000 signatures.
1. Each block is broadcasted on a different **sub-network**,<br>not everyone.

Notes:

nodes need only join the subnets corresponding to the blocks that they are responsible for (or are interested in for other reasons).

On Ethereum, this will synergistically with layer 2 rollups by splitting up the burden of handling the large amount of data needed by rollups over the entire network. This will continue to reduce network congestion and increase transactions per second.

---

## Sharding on [Polkadot](https://polkadot.network)

In operation today, using related methodology Ethereum will use,<br>a shard in this paradigm is a **parachain**:

<br>

<widget-img style="width: 400px; border-radius: 3%;" src="/assets/img/dot/relay-network-diagram.png" alt="Polkadot Diagram (sharded)"/>

---

## Sharding

_Vitalik explains: https://vitalik.ca/general/2021/04/07/sharding.html_

---

# The Verge

---

## The Verge

<widget-text center>

1. “Verkle trees”
2. “Stateless clients”

<br>

These technical upgrades will allow users to become network validators<br>without having to store extensive amounts of data on their machines.

---

## The Verge

<widget-columns>
<widget-column>

<widget-text center>

**Merkle**

<widget-img style="object-fit: cover; border-radius: 2%; width: 650px;" src="/assets/img/eth/verkle2.png"/>

</widget-text>

</widget-column>
<widget-column>

<widget-text center>

**Verkle**

<widget-img style="object-fit: cover; border-radius: 2%; width: 650px;" src="/assets/img/eth/verkle5.png"/>

</widget-text>

</widget-column>
</widget-columns>

<br>

In a Verkle tree's polynomial proofs you do not need to provide sister nodes; instead, you just provide the path, with a little bit extra as a proof.

---

## Stateless Clients

<widget-text center>

> Statelessness allows the creation of light nodes.
> A light node contains only the chain of headers without the execution of any transactions or associated states.

Mainly useful: of lower computer resources needed to run a node, except bandwidth.

---

## Stateless Clients

<widget-text center>

- Minimal syncing overhead vs. full node<br>(Deterministic finality in PoS, even better!)
- Trustless RPC endpoint<br>(Send transactions, query and validate state)
- Embedded nodes in dApps
- Mobile nodes & dApps

---

## The Verge & Stateless Clients

Vitalik explains verkle tries: https://vitalik.ca/general/2021/06/18/verkle.html

<br>

EthHub explains stateless clients: https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/stateless-clients/

---

## The Purge

Cut down the amount of space required to store ETH on a hard drive, trying to simplify the Ethereum protocol and not requiring nodes to store history.

---

## The Splurge

… “all of the other fun stuff.”

Vitalik on the _Endgame_: https://vitalik.ca/general/2021/12/06/endgame.html

---

# More to come!

Questions? Thoughts?

Something to add I missed?

---

<a href="https://cryptorado.org" target="_blank"><widget-img style="object-fit: cover; border-radius: 2%; height: 190px; width: 750px" src="/assets/img/shared/logo/cryptoradoBanner_1080.png"/></a>

<br>

<widget-columns>
<widget-column>

<widget-text center>

**Web3 Community**

- Advocacy & Outreach
- Micro-grants
- Educational efforts
- Partner programs
- Office hours & consultations

</widget-text>

</widget-column>
<widget-column>

<widget-text center>

**Homebase**

- Online Resources
- Education
- Gatherings & Events
- Shared spaces: An **Embassy**

</widget-text>

</widget-column>
</widget-columns>

---

## What Makes Us Unique?

<widget-columns>
<widget-column>

<widget-text center>

<a href="https://cryptorado.org" target="_blank"><widget-img style="height: 350px" src="/assets/img/shared/logo/cryptorado_colored.png"/></a>

</widget-text>

</widget-column>
<widget-column>

- **Freelance, Startup, & Small Company Focus**

_Most unions/associations are for large companies_
<br>
_Nomad friendly! Virtual & CO based resources_
<br>
_Grassroots - peer led and governed_

<br>

- **Experimenting with new organizational models**

_Decentralized and Federated Technology In-house_
<br>
_Tokenomic Incentives and Operations_
<br>
_Gig/Bounty work (Dog-fooding and as a service)_
<br>
_Bottom-up/ flat structure and governance_

<widget-text center>

</widget-text>

</widget-column>
</widget-columns>

Notes:

- Events, office space/services, Education, Networking, ...

---

<!-- .slide: data-background-color="#4d5060" data-transition="fade" -->

<widget-img style="object-fit: cover; border-radius: 2%; height: 650px; width: 600px" src="/assets/img/shared/want-you.png"/>

Notes:

- Call to action: we have to BUIDL IT!
- Web3 will not build itself!

---

## Join the Community!

<widget-columns>
<widget-column>

<widget-text center>

### https://cryptorado.org

- Events Calendar
- Discord community
- ... and more!

</widget-column>
<widget-column>

<a href="https://cryptorado.org" target="_blank"><widget-img style="object-fit: cover; border-radius: 4%; height: 450px" src="/assets/img/shared/QR/cryptorado-org-website.png"/></a>

</widget-column>
</widget-columns>

Notes:

QR -> https://cryptorado.org

---

<!-- .slide: data-background-color="#4d5060" data-transition="fade" -->

# Questions?
