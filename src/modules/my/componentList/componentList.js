import { LightningElement } from 'lwc';

export default class ComponentList extends LightningElement {
    componentRecords = [
        {
            createdAt: '2020-05-31 06:31:22',
            name: 'LWC SOQL Builder',
            category: 'Tools',
            description:
                'Awesome SOQL execution tool developed in Lightning Web Components Open Source',
            githubRepoUrl:
                'https://github.com/lwc-soql-builder/lwc-soql-builder',
            playgroundUrl: 'https://lwc-soql-builder.github.io/',
            owner: {
                name: 'atskimura',
                githubNickname: 'atskimura',
                githubUrl: 'https://github.com/atskimura',
                avatar: 'https://github.com/atskimura.png?size=40'
            }
        },
        {
            createdAt: '2020-05-30 12:51:56',
            name: 'LWC Stencil',
            category: 'UI Components',
            description: 'Lightning Web Component used for Skeleton Loading',
            githubRepoUrl: 'https://github.com/gavignon/lwc-stencil',
            playgroundUrl:
                'https://developer.salesforce.com/docs/component-library/tools/playground/1dJhbHCv8/1/edit',
            owner: {
                name: 'Gil Avignon',
                githubNickname: 'gavignon',
                githubUrl: 'https://github.com/gavignon',
                avatar: 'https://github.com/gavignon.png?size=40'
            }
        }
    ];

    get components() {
        return this.componentRecords;
    }
}
