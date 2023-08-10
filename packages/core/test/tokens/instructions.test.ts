import { describe, expect, it } from "vitest";
import * as splToken from "@solana/spl-token";
import * as instructions from "../../src/tokens/instructions";

describe("token instruction exports", () => {
  it("should export all instructions from spl-token", () => {
    const splInstructions = Object.keys(splToken).filter((key) => {
      return (
        (key.startsWith("create") || key.startsWith("decode")) &&
        key.endsWith("Instruction")
      );
    });

    expect(splInstructions).toMatchInlineSnapshot(`
      [
        "createAmountToUiAmountInstruction",
        "createApproveCheckedInstruction",
        "createApproveInstruction",
        "createAssociatedTokenAccountIdempotentInstruction",
        "createAssociatedTokenAccountInstruction",
        "createBurnCheckedInstruction",
        "createBurnInstruction",
        "createCloseAccountInstruction",
        "createCreateNativeMintInstruction",
        "createDisableCpiGuardInstruction",
        "createDisableRequiredMemoTransfersInstruction",
        "createEnableCpiGuardInstruction",
        "createEnableRequiredMemoTransfersInstruction",
        "createFreezeAccountInstruction",
        "createHarvestWithheldTokensToMintInstruction",
        "createInitializeAccount2Instruction",
        "createInitializeAccount3Instruction",
        "createInitializeAccountInstruction",
        "createInitializeDefaultAccountStateInstruction",
        "createInitializeImmutableOwnerInstruction",
        "createInitializeInterestBearingMintInstruction",
        "createInitializeMint2Instruction",
        "createInitializeMintCloseAuthorityInstruction",
        "createInitializeMintInstruction",
        "createInitializeMultisigInstruction",
        "createInitializeNonTransferableMintInstruction",
        "createInitializePermanentDelegateInstruction",
        "createInitializeTransferFeeConfigInstruction",
        "createMintToCheckedInstruction",
        "createMintToInstruction",
        "createReallocateInstruction",
        "createRevokeInstruction",
        "createSetAuthorityInstruction",
        "createSyncNativeInstruction",
        "createThawAccountInstruction",
        "createTransferCheckedInstruction",
        "createTransferCheckedWithFeeInstruction",
        "createTransferInstruction",
        "createUiAmountToAmountInstruction",
        "createUpdateDefaultAccountStateInstruction",
        "createUpdateRateInterestBearingMintInstruction",
        "createWithdrawWithheldTokensFromAccountsInstruction",
        "createWithdrawWithheldTokensFromMintInstruction",
        "decodeAmountToUiAmountInstruction",
        "decodeApproveCheckedInstruction",
        "decodeApproveInstruction",
        "decodeBurnCheckedInstruction",
        "decodeBurnInstruction",
        "decodeCloseAccountInstruction",
        "decodeFreezeAccountInstruction",
        "decodeHarvestWithheldTokensToMintInstruction",
        "decodeInitializeAccount2Instruction",
        "decodeInitializeAccount3Instruction",
        "decodeInitializeAccountInstruction",
        "decodeInitializeImmutableOwnerInstruction",
        "decodeInitializeMint2Instruction",
        "decodeInitializeMintCloseAuthorityInstruction",
        "decodeInitializeMintInstruction",
        "decodeInitializeMultisigInstruction",
        "decodeInitializePermanentDelegateInstruction",
        "decodeInitializeTransferFeeConfigInstruction",
        "decodeInstruction",
        "decodeMintToCheckedInstruction",
        "decodeMintToInstruction",
        "decodeRevokeInstruction",
        "decodeSetAuthorityInstruction",
        "decodeSyncNativeInstruction",
        "decodeThawAccountInstruction",
        "decodeTransferCheckedInstruction",
        "decodeTransferCheckedWithFeeInstruction",
        "decodeTransferInstruction",
        "decodeUiAmountToAmountInstruction",
        "decodeWithdrawWithheldTokensFromAccountsInstruction",
        "decodeWithdrawWithheldTokensFromMintInstruction",
      ]
    `);
    expect(Object.keys(instructions)).toEqual(splInstructions);
  });
});
