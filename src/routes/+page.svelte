<script lang="ts">
  import Container from "$lib/components/common/Container.svelte";
  import { createWorkspaceStore } from "$lib/store";
  import { onMount } from "svelte";
  import type { Workspace, WorkspaceStore } from "$lib/types/types";
  import { get } from "svelte/store";

  let workspaces: WorkspaceStore;
  let workspaceItem: Workspace[];
  onMount(() => {
    workspaces = createWorkspaceStore();
    workspaces.subscribe((workspaces) => {
      workspaceItem = workspaces;
    });
    workspaces.validateWorkspaces();
    console.log(get(workspaces));
    // });
    // const create =()=>{
    workspaces.createWorkspace({
      id: "mem",
      url: "meme",
      authorId: "luki",
      isPublic: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    // }
  });
</script>

<Container>
  {#if !workspaceItem}
    <h2 class="p-2 text-4xl text-center font-black">
      Welcome to Notes&Todo App
    </h2>
    <p>Add some Note or Todo to remove this message</p>
  {:else}
    {JSON.stringify(workspaceItem)}
    <h1 class="text-2xl font-bold mb-4">Workspaces</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each workspaceItem as workspace}
        <div class="bg-surface-container-high rounded-lg shadow p-4">
          <h2 class="text-lg font-semibold mb-2">
            {workspace.url || workspace.id}
          </h2>
          <p class="">Author ID: {workspace.authorId}</p>
          <p class="">
            Members: {workspace.memberIds?.join(", ") || "None"}
          </p>

          {#if workspace.notes?.length}
            <h3 class="text-md font-medium mt-4">Notes:</h3>
            <ul>
              {#each workspace.notes as note}
                <li>{note.content}</li>
              {/each}
            </ul>
          {/if}

          {#if workspace.todos?.length}
            <h3 class="text-md font-medium mt-4">Todos:</h3>
            <ul>
              {#each workspace.todos as todo}
                <li class={todo.completed ? "line-through text-gray-500" : ""}>
                  {todo.text}
                </li>
              {/each}
            </ul>
          {/if}

          <p class="text-sm text-gray-500 mt-2">
            Created at: {workspace.createdAt.toLocaleString()}
          </p>
          <p class="text-sm text-gray-500">
            Updated at: {workspace.updatedAt.toLocaleString()}
          </p>
        </div>
      {/each}
    </div>
  {/if}
</Container>
